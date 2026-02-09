import { Button, Input, Select, message } from 'antd'
import { PlusOutlined, DeleteOutlined } from '@ant-design/icons'
import { useState } from 'react'
import { LanguageLevel, LanguageSkill } from '../../types/cv.types'

interface LanguagesFormProps {
  languages: LanguageSkill[]
  onChange: (nextLanguages: LanguageSkill[]) => void
}

const LANGUAGE_LEVEL_OPTIONS: { value: LanguageLevel; label: string }[] = [
  { value: 'beginner', label: 'مبتدی' },
  { value: 'intermediate', label: 'متوسط' },
  { value: 'advanced', label: 'پیشرفته' },
]

const LanguagesForm = ({ languages, onChange }: LanguagesFormProps) => {
  const [languageName, setLanguageName] = useState('')
  const [languageLevel, setLanguageLevel] = useState<LanguageLevel>('intermediate')

  const handleAddLanguage = () => {
    const trimmedName = languageName.trim()

    if (!trimmedName) {
      message.error('لطفا نام زبان را وارد کنید')
      return
    }

    const isDuplicate = languages.some(
      (language) =>
        language.name.trim().toLowerCase() === trimmedName.toLowerCase() &&
        language.level === languageLevel
    )

    if (isDuplicate) {
      message.info('این زبان با همین سطح قبلاً اضافه شده است')
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
        <h2 className="text-2xl font-semibold text-gray-700">زبان‌های مسلط</h2>
      </div>

      <div className="flex flex-col lg:flex-row gap-3 items-stretch lg:items-end">
        <div className="flex-1">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            نام زبان
          </label>
          <Input
            placeholder="مثال: انگلیسی"
            size="large"
            value={languageName}
            onChange={(event) => setLanguageName(event.target.value)}
            onPressEnter={handleAddLanguage}
          />
        </div>
        <div className="w-full lg:w-56">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            سطح تسلط
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
          افزودن زبان
        </Button>
      </div>

      <div className="space-y-3">
        {languages.length === 0 ? (
          <p className="text-gray-500 text-sm">هنوز زبانی اضافه نشده است</p>
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
                حذف
              </Button>
            </div>
          ))
        )}
      </div>
    </div>
  )
}

export default LanguagesForm

