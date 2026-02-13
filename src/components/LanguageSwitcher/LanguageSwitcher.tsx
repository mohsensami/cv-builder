import { Select } from 'antd'
import { AppLanguage, useLanguage } from '../../contexts'
import { useMemo } from 'react'
import useTranslations from '../../hooks/useTranslations'

interface LanguageSwitcherProps {
  size?: 'small' | 'middle' | 'large'
  showLabel?: boolean
}

const LanguageSwitcher = ({ size = 'middle', showLabel = true }: LanguageSwitcherProps) => {
  const { language, setLanguage } = useLanguage()
  const t = useTranslations()

  const LANGUAGE_OPTIONS: { value: AppLanguage; label: string }[] = useMemo(
    () => [
      { value: 'fa', label: t.languageSwitcherOptionFa },
      { value: 'en', label: t.languageSwitcherOptionEn },
    ],
    [t]
  )

  return (
    <div className="flex items-center gap-2">
      {showLabel && (
        <span className="text-sm text-gray-600">{t.languageSwitcherLabel}</span>
      )}
      <Select<AppLanguage>
        size={size}
        value={language}
        style={{ minWidth: 160 }}
        options={LANGUAGE_OPTIONS}
        onChange={(nextLanguage) => setLanguage(nextLanguage)}
      />
    </div>
  )
}

export default LanguageSwitcher

