import { ConfigProvider } from 'antd'
import faIR from 'antd/locale/fa_IR'
import enUS from 'antd/locale/en_US'
import { createContext, ReactNode, useContext, useMemo } from 'react'
import useLocalStorage from '../hooks/useLocalStorage'

export type AppLanguage = 'fa' | 'en'

interface LanguageContextType {
  language: AppLanguage
  setLanguage: (language: AppLanguage) => void
  direction: 'rtl' | 'ltr'
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

interface LanguageProviderProps {
  children: ReactNode
}

export const LanguageProvider = ({ children }: LanguageProviderProps) => {
  const [language, setLanguageState] = useLocalStorage<AppLanguage>('cv-language', 'fa')

  const direction: 'rtl' | 'ltr' = language === 'fa' ? 'rtl' : 'ltr'
  const locale = language === 'fa' ? faIR : enUS

  const setLanguage = (nextLanguage: AppLanguage) => {
    setLanguageState(nextLanguage)
  }

  const value = useMemo(
    () => ({
      language,
      setLanguage,
      direction,
    }),
    [language, direction],
  )

  return (
    <LanguageContext.Provider value={value}>
      <ConfigProvider locale={locale} direction={direction}>
        <div dir={direction}>
          {children}
        </div>
      </ConfigProvider>
    </LanguageContext.Provider>
  )
}

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}

