import { createContext, useContext, ReactNode, useMemo } from 'react'
import { CVData, WorkExperience, EducationRecord, LanguageSkill } from '../types/cv.types'
import useLocalStorage from '../hooks/useLocalStorage'
import { useLanguage, AppLanguage } from './LanguageContext'

interface CVContextType {
  cvData: CVData
  updateCVData: (
    field: keyof CVData,
    value: string | WorkExperience[] | EducationRecord[] | string[] | LanguageSkill[]
  ) => void
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
  aboutMe: '',
  workExperiences: [],
  educationRecords: [],
  skills: [],
  languages: [],
}

type CVStorage = Record<AppLanguage, CVData>

interface CVProviderProps {
  children: ReactNode
}

// Helper function to migrate old data structure for a single language
const migrateCVData = (data: any): CVData => {
  // If data already has the new structure, return it
  if (data && typeof data === 'object' && 'workExperiences' in data) {
    return {
      fullName: data.fullName || '',
      phone: data.phone || '',
      email: data.email || '',
      aboutMe: data.aboutMe || '',
      workExperiences: Array.isArray(data.workExperiences) ? data.workExperiences : [],
      educationRecords: Array.isArray(data.educationRecords) ? data.educationRecords : [],
      skills: Array.isArray(data.skills) ? data.skills : [],
      languages: Array.isArray(data.languages) ? data.languages : [],
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
      aboutMe: data.aboutMe || '',
      workExperiences: [],
      educationRecords: [],
      skills: Array.isArray(data.skills) ? data.skills : [],
      languages: Array.isArray(data.languages) ? data.languages : [],
    }
  }
  
  return initialCVData
}

const createInitialStorage = (): CVStorage => ({
  fa: initialCVData,
  en: initialCVData,
})

// Normalize any shape from localStorage into our multi-language storage
const migrateStorage = (data: any): CVStorage => {
  if (!data || typeof data !== 'object') {
    return createInitialStorage()
  }

  // Already in multi-language shape
  if ('fa' in data || 'en' in data) {
    return {
      fa: migrateCVData((data as CVStorage).fa),
      en: migrateCVData((data as CVStorage).en),
    }
  }

  // Legacy single-language data: use it for Farsi, start English empty
  const migrated = migrateCVData(data)
  return {
    fa: migrated,
    en: initialCVData,
  }
}

export const CVProvider = ({ children }: CVProviderProps) => {
  const { language } = useLanguage()
  const [storedData, setStoredData] = useLocalStorage<any>('cv-data', createInitialStorage())

  const allData: CVStorage = useMemo(
    () => migrateStorage(storedData),
    [storedData],
  )

  const cvData: CVData = allData[language]

  const setCVData = (data: CVData | ((prev: CVData) => CVData)) => {
    setStoredData((prevStorage: unknown) => {
      const current = migrateStorage(prevStorage)
      const currentForLanguage = current[language]
      const nextForLanguage =
        typeof data === 'function' ? (data as (prev: CVData) => CVData)(currentForLanguage) : data

      return {
        ...current,
        [language]: nextForLanguage,
      }
    })
  }

  const updateCVData = (field: keyof CVData, value: string | WorkExperience[] | EducationRecord[] | string[] | LanguageSkill[]) => {
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
