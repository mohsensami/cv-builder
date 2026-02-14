import { useCV } from '../../contexts'
import { LanguageLevel } from '../../types/cv.types'
import useTranslations from '../../hooks/useTranslations'

const LanguagesPreview = () => {
  const { cvData } = useCV()
  const t = useTranslations()

  const levelToLabel = (level: LanguageLevel): string => {
    switch (level) {
      case 'beginner':
        return t.languagesLevelBeginner
      case 'intermediate':
        return t.languagesLevelIntermediate
      case 'advanced':
        return t.languagesLevelAdvanced
      default:
        return String(level)
    }
  }

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
      <h3 className="text-lg font-semibold cv-section-title border-b pb-2">
        {t.languagesPreviewTitle}
      </h3>
      <div className="flex flex-wrap gap-2">
        {validLanguages.map((language, index) => (
          <div
            key={`${language.name}-${language.level}-${index}`}
            className="cv-tag px-3 py-1 rounded-full border text-sm flex items-center gap-2"
          >
            <span className="font-medium">{language.name}</span>
            <span className="text-xs opacity-80">
              ({levelToLabel(language.level)})
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default LanguagesPreview

