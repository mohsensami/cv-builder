import { Button, Input, Select, message } from 'antd'
import { PlusOutlined, DeleteOutlined } from '@ant-design/icons'
import { useState, useMemo } from 'react'
import { LanguageLevel, LanguageSkill } from '../../types/cv.types'
import useTranslations from '../../hooks/useTranslations'

interface LanguagesFormProps {
  languages: LanguageSkill[]
  onChange: (nextLanguages: LanguageSkill[]) => void
}

const LanguagesForm = ({ languages, onChange }: LanguagesFormProps) => {
  const t = useTranslations()
  const [languageName, setLanguageName] = useState('')
  const [languageLevel, setLanguageLevel] = useState<LanguageLevel>('intermediate')

  const LANGUAGE_LEVEL_OPTIONS: { value: LanguageLevel; label: string }[] = useMemo(
    () => [
      { value: 'beginner', label: t.languagesLevelBeginner },
      { value: 'intermediate', label: t.languagesLevelIntermediate },
      { value: 'advanced', label: t.languagesLevelAdvanced },
    ],
    [t]
  )

  const handleAddLanguage = () => {
    const trimmedName = languageName.trim()

    if (!trimmedName) {
      message.error(t.languagesFormLanguageNameRequired)
      return
    }

    const isDuplicate = languages.some(
      (language) =>
        language.name.trim().toLowerCase() === trimmedName.toLowerCase() &&
        language.level === languageLevel
    )

    if (isDuplicate) {
      message.info(t.languagesFormDuplicateMessage)
      return
    }

    onChange([
      ...languages,
      {
        name: trimmedName,
        level: languageLevel,
      },
    ])

    setLanguageName('')
    setLanguageLevel('intermediate')
  }

  const handleRemoveLanguage = (index: number) => {
    onChange(languages.filter((_, i) => i !== index))
  }

  const renderLevelLabel = (level: LanguageLevel): string => {
    const option = LANGUAGE_LEVEL_OPTIONS.find((item) => item.value === level)
    return option?.label || level
  }

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-semibold text-gray-700">{t.languagesFormTitle}</h2>
      </div>

      <div className="flex flex-col lg:flex-row gap-3 items-stretch lg:items-end">
        <div className="flex-1">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            {t.languagesFormLanguageNameLabel}
          </label>
          <Input
            placeholder={t.languagesFormLanguageNamePlaceholder}
            size="large"
            value={languageName}
            onChange={(event) => setLanguageName(event.target.value)}
            onPressEnter={handleAddLanguage}
          />
        </div>
        <div className="w-full lg:w-56">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            {t.languagesFormLevelLabel}
          </label>
          <Select
            size="large"
            className="w-full"
            value={languageLevel}
            onChange={(value: LanguageLevel) => setLanguageLevel(value)}
            options={LANGUAGE_LEVEL_OPTIONS}
          />
        </div>
        <Button
          type="primary"
          icon={<PlusOutlined />}
          onClick={handleAddLanguage}
          size="large"
          className="lg:w-auto"
        >
          {t.languagesFormAddButton}
        </Button>
      </div>

      <div className="space-y-3">
        {languages.length === 0 ? (
          <p className="text-gray-500 text-sm">{t.languagesFormEmptyMessage}</p>
        ) : (
          languages.map((language, index) => (
            <div
              key={`${language.name}-${language.level}-${index}`}
              className="flex items-center justify-between p-3 border border-gray-200 rounded-lg bg-gray-50"
            >
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                <span className="text-gray-800 font-medium">{language.name}</span>
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-50 text-blue-700 border border-blue-100">
                  {renderLevelLabel(language.level)}
                </span>
              </div>
              <Button
                type="text"
                danger
                icon={<DeleteOutlined />}
                onClick={() => handleRemoveLanguage(index)}
                size="small"
              >
                {t.languagesFormDelete}
              </Button>
            </div>
          ))
        )}
      </div>
    </div>
  )
}

export default LanguagesForm

