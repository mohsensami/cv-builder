import { useCV } from '../../contexts'
import useTranslations from '../../hooks/useTranslations'

const SkillsPreview = () => {
  const { cvData } = useCV()
  const t = useTranslations()

  if (!cvData.skills || cvData.skills.length === 0) {
    return null
  }

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold cv-section-title border-b pb-2">
        {t.skillsPreviewTitle}
      </h3>
      <div className="flex flex-wrap gap-2">
        {cvData.skills.map((skill, index) => (
          <span
            key={`${skill}-${index}`}
            className="cv-tag px-3 py-1 text-sm rounded-full border"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  )
}

export default SkillsPreview
