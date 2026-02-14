import { useCV } from '../../contexts'
import useTranslations from '../../hooks/useTranslations'

const WorkExperiencePreview = () => {
  const { cvData } = useCV()
  const t = useTranslations()

  if (!cvData.workExperiences || cvData.workExperiences.length === 0) {
    return null
  }

  // Filter out undefined or null experiences
  const validExperiences = cvData.workExperiences.filter(
    (exp) => exp && typeof exp === 'object'
  )

  if (validExperiences.length === 0) {
    return null
  }

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold cv-section-title border-b pb-2">
        {t.previewWorkExperienceTitle}
      </h3>
      <div className="space-y-4">
        {validExperiences.map((experience, index) => (
          <div
            key={index}
            className="cv-accent-border border-r-4 pr-4 pb-4 last:pb-0"
          >
            <div className="space-y-2">
              <h4 className="text-lg font-semibold">
                {experience?.title || t.previewWorkExperienceFallbackJobTitle}
              </h4>
              <div className="opacity-90 space-y-1">
                <p>
                  <span className="font-medium">
                    {t.previewWorkExperienceLabelPosition}
                  </span>{' '}
                  {experience?.position || '-'}
                </p>
                <p>
                  <span className="font-medium">
                    {t.previewWorkExperienceLabelDate}
                  </span>{' '}
                  {experience?.date || '-'}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default WorkExperiencePreview
