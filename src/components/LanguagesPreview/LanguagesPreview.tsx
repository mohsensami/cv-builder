import { useCV } from '../../contexts'
import { LanguageLevel } from '../../types/cv.types'

const levelToLabel = (level: LanguageLevel): string => {
  switch (level) {
    case 'beginner':
      return 'مبتدی'
    case 'intermediate':
      return 'متوسط'
    case 'advanced':
      return 'پیشرفته'
    default:
      return String(level)
  }
}

const LanguagesPreview = () => {
  const { cvData } = useCV()

  if (!cvData.languages || cvData.languages.length === 0) {
    return null
  }

  const validLanguages = cvData.languages.filter(
    (language) => language && typeof language === 'object' && language.name
  )

  if (validLanguages.length === 0) {
    return null
  }

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold text-gray-700 border-b border-gray-300 pb-2">
        زبان‌های مسلط
      </h3>
      <div className="flex flex-wrap gap-2">
        {validLanguages.map((language, index) => (
          <div
            key={`${language.name}-${language.level}-${index}`}
            className="px-3 py-1 rounded-full bg-purple-50 text-purple-800 border border-purple-200 text-sm flex items-center gap-2"
          >
            <span className="font-medium">{language.name}</span>
            <span className="text-xs text-purple-700">
              ({levelToLabel(language.level)})
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default LanguagesPreview

