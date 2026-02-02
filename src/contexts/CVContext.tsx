import { createContext, useContext, ReactNode } from 'react'
import { CVData } from '../types/cv.types'
import useLocalStorage from '../hooks/useLocalStorage'

interface CVContextType {
  cvData: CVData
  updateCVData: (field: keyof CVData, value: string) => void
  setCVData: (data: CVData | ((prev: CVData) => CVData)) => void
  resetCVData: () => void
}

const CVContext = createContext<CVContextType | undefined>(undefined)

const initialCVData: CVData = {
  fullName: '',
  phone: '',
  email: '',
}

interface CVProviderProps {
  children: ReactNode
}

export const CVProvider = ({ children }: CVProviderProps) => {
  const [cvData, setCVData] = useLocalStorage<CVData>('cv-data', initialCVData)

  const updateCVData = (field: keyof CVData, value: string) => {
    setCVData((prev) => ({
      ...prev,
      [field]: value,
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
