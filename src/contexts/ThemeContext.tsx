import { createContext, useContext, ReactNode } from 'react'
import useLocalStorage from '../hooks/useLocalStorage'
import { CVTheme, DEFAULT_CV_THEME } from '../types/theme.types'

const STORAGE_KEY = 'cv-theme'

interface ThemeContextType {
  theme: CVTheme
  setTheme: (theme: CVTheme | ((prev: CVTheme) => CVTheme)) => void
  resetTheme: () => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

interface ThemeProviderProps {
  children: ReactNode
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [theme, setTheme] = useLocalStorage<CVTheme>(STORAGE_KEY, DEFAULT_CV_THEME)

  const resetTheme = () => {
    setTheme(DEFAULT_CV_THEME)
  }

  const value: ThemeContextType = {
    theme,
    setTheme,
    resetTheme,
  }

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}
