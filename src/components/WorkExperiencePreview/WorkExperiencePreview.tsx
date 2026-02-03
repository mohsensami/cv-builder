import { useCV } from '../../contexts'

const WorkExperiencePreview = () => {
  const { cvData } = useCV()

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
      <h3 className="text-lg font-semibold text-gray-700 border-b border-gray-300 pb-2">
        تجربه‌های کاری
      </h3>
      <div className="space-y-4">
        {validExperiences.map((experience, index) => (
          <div
            key={index}
            className="border-r-4 border-blue-500 pr-4 pb-4 last:pb-0"
          >
            <div className="space-y-2">
              <h4 className="text-lg font-semibold text-gray-800">
                {experience?.title || 'عنوان شغل'}
              </h4>
              <div className="text-gray-600 space-y-1">
                <p>
                  <span className="font-medium">سمت:</span> {experience?.position || '-'}
                </p>
                <p>
                  <span className="font-medium">تاریخ:</span> {experience?.date || '-'}
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
