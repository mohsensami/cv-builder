import { Select } from 'antd'
import { AppLanguage, useLanguage } from '../../contexts'

interface LanguageSwitcherProps {
  size?: 'small' | 'middle' | 'large'
  showLabel?: boolean
}

const LANGUAGE_OPTIONS: { value: AppLanguage; label: string }[] = [
  { value: 'fa', label: 'رزومه فارسی' },
  { value: 'en', label: 'Resume English' },
]

const LanguageSwitcher = ({ size = 'middle', showLabel = true }: LanguageSwitcherProps) => {
  const { language, setLanguage } = useLanguage()

  return (
    <div className="flex items-center gap-2">
      {showLabel && (
        <span className="text-sm text-gray-600">
          زبان رزومه:
        </span>
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

