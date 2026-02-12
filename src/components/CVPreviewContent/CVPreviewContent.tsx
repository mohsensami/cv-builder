import { useCV } from '../../contexts'
import useTranslations from '../../hooks/useTranslations'
import WorkExperiencePreview from '../WorkExperiencePreview/WorkExperiencePreview'
import EducationPreview from '../EducationPreview/EducationPreview'
import SkillsPreview from '../SkillsPreview/SkillsPreview'
import LanguagesPreview from '../LanguagesPreview/LanguagesPreview'

const CVPreviewContent = () => {
  const { cvData } = useCV()
  const t = useTranslations()

  return (
    <div className="space-y-6">
      <div className="border-b border-gray-300 pb-4">
        <h1 className="text-3xl font-bold text-gray-800">
          {cvData.fullName || t.previewFullNameFallback}
        </h1>
      </div>
      
      <div className="space-y-2">
        <h3 className="text-lg font-semibold text-gray-700">
          {t.previewPersonalInfoTitle}
        </h3>
        <div className="text-gray-600 space-y-1">
          <p>
            <span className="font-medium">{t.previewLabelFullName}</span>{' '}
            {cvData.fullName || '-'}
          </p>
          <p>
            <span className="font-medium">{t.previewLabelPhone}</span>{' '}
            {cvData.phone || '-'}
          </p>
          <p>
            <span className="font-medium">{t.previewLabelEmail}</span>{' '}
            {cvData.email || '-'}
          </p>
          <p>
            <span className="font-medium">{t.previewLabelAboutMe}</span>{' '}
            {cvData.aboutMe || '-'}
          </p>
        </div>
      </div>

      {cvData.workExperiences && cvData.workExperiences.length > 0 && (
        <div className="border-t border-gray-200 pt-6">
          <WorkExperiencePreview />
        </div>
      )}

      {cvData.skills && cvData.skills.length > 0 && (
        <div className="border-t border-gray-200 pt-6">
          <SkillsPreview />
        </div>
      )}

      {cvData.languages && cvData.languages.length > 0 && (
        <div className="border-t border-gray-200 pt-6">
          <LanguagesPreview />
        </div>
      )}

      {cvData.educationRecords && cvData.educationRecords.length > 0 && (
        <div className="border-t border-gray-200 pt-6">
          <EducationPreview />
        </div>
      )}
    </div>
  )
}

export default CVPreviewContent
