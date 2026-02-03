import { createContext, useContext, ReactNode, useMemo, useEffect, useRef } from 'react'
import { CVData, WorkExperience } from '../types/cv.types'
import useLocalStorage from '../hooks/useLocalStorage'

interface CVContextType {
  cvData: CVData
  updateCVData: (field: keyof CVData, value: string | WorkExperience[]) => void
  setCVData: (data: CVData | ((prev: CVData) => CVData)) => void
  resetCVData: () => void
  addWorkExperience: () => void
  removeWorkExperience: (index: number) => void
  updateWorkExperience: (index: number, field: keyof WorkExperience, value: string) => void
}

const CVContext = createContext<CVContextType | undefined>(undefined)

const initialCVData: CVData = {
  fullName: '',
  phone: '',
  email: '',
  workExperiences: [],
}

interface CVProviderProps {
  children: ReactNode
}

// Helper function to migrate old data structure to new one
const migrateCVData = (data: any): CVData => {
  // If data already has the new structure, return it
  if (data && typeof data === 'object' && 'workExperiences' in data) {
    return {
      fullName: data.fullName || '',
      phone: data.phone || '',
      email: data.email || '',
      workExperiences: Array.isArray(data.workExperiences) ? data.workExperiences : [],
    }
  }
  
  // If data has old structure (firstName, lastName), migrate it
  if (data && typeof data === 'object') {
    return {
      fullName: data.fullName || (data.firstName && data.lastName 
        ? `${data.firstName} ${data.lastName}`.trim() 
        : ''),
      phone: data.phone || '',
      email: data.email || '',
      workExperiences: [],
    }
  }
  
  return initialCVData
}

export const CVProvider = ({ children }: CVProviderProps) => {
  const [storedData, setStoredData] = useLocalStorage<any>('cv-data', initialCVData)
  const migrationDone = useRef(false)
  
  // Migrate data on load
  const cvData: CVData = useMemo(() => migrateCVData(storedData), [storedData])
  
  // Sync migrated data back to storage if it was migrated (only once)
  useEffect(() => {
    if (!migrationDone.current && storedData && typeof storedData === 'object' && !('workExperiences' in storedData)) {
      migrationDone.current = true
      setStoredData(cvData)
    }
  }, [storedData, cvData, setStoredData])
  
  const setCVData = (data: CVData | ((prev: CVData) => CVData)) => {
    const newData = typeof data === 'function' ? data(cvData) : data
    setStoredData(newData)
  }

  const updateCVData = (field: keyof CVData, value: string | WorkExperience[]) => {
    setCVData((prev) => ({
      ...prev,
      [field]: value,
    }))
  }

  const addWorkExperience = () => {
    setCVData((prev) => ({
      ...prev,
      workExperiences: [
        ...prev.workExperiences,
        { title: '', date: '', position: '' },
      ],
    }))
  }

  const removeWorkExperience = (index: number) => {
    setCVData((prev) => ({
      ...prev,
      workExperiences: prev.workExperiences.filter((_, i) => i !== index),
    }))
  }

  const updateWorkExperience = (index: number, field: keyof WorkExperience, value: string) => {
    setCVData((prev) => ({
      ...prev,
      workExperiences: prev.workExperiences.map((exp, i) =>
        i === index ? { ...exp, [field]: value } : exp
      ),
    }))
  }

  const resetCVData = () => {
    setCVData(initialCVData)
  }

  const value: CVContextType = {
    cvData,
    updateCVData,
    setCVData,
    resetCVData,
    addWorkExperience,
    removeWorkExperience,
    updateWorkExperience,
  }

  return <CVContext.Provider value={value}>{children}</CVContext.Provider>
}

export const useCV = (): CVContextType => {
  const context = useContext(CVContext)
  if (context === undefined) {
    throw new Error('useCV must be used within a CVProvider')
  }
  return context
}
