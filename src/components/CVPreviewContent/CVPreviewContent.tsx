import { useCV } from '../../contexts'
import WorkExperiencePreview from '../WorkExperiencePreview/WorkExperiencePreview'
import EducationPreview from '../EducationPreview/EducationPreview'
import SkillsPreview from '../SkillsPreview/SkillsPreview'

const CVPreviewContent = () => {
  const { cvData } = useCV()

  return (
    <div className="space-y-6">
      <div className="border-b border-gray-300 pb-4">
        <h1 className="text-3xl font-bold text-gray-800">
          {cvData.fullName || 'نام و نام خانوادگی'}
        </h1>
      </div>
      
      <div className="space-y-2">
        <h3 className="text-lg font-semibold text-gray-700">اطلاعات شخصی</h3>
        <div className="text-gray-600 space-y-1">
          <p>
            <span className="font-medium">نام و نام خانوادگی:</span> {cvData.fullName || '-'}
          </p>
          <p>
            <span className="font-medium">تلفن تماس:</span> {cvData.phone || '-'}
          </p>
          <p>
            <span className="font-medium">ایمیل:</span> {cvData.email || '-'}
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

      {cvData.educationRecords && cvData.educationRecords.length > 0 && (
        <div className="border-t border-gray-200 pt-6">
          <EducationPreview />
        </div>
      )}
    </div>
  )
}

export default CVPreviewContent
