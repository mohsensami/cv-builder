import { useCV } from '../../contexts'

const EducationPreview = () => {
  const { cvData } = useCV()

  if (!cvData.educationRecords || cvData.educationRecords.length === 0) {
    return null
  }

  const validRecords = cvData.educationRecords.filter(
    (record) => record && typeof record === 'object'
  )

  if (validRecords.length === 0) {
    return null
  }

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold text-gray-700 border-b border-gray-300 pb-2">
        سوابق تحصیلی
      </h3>
      <div className="space-y-4">
        {validRecords.map((record, index) => (
          <div
            key={index}
            className="border-r-4 border-emerald-500 pr-4 pb-4 last:pb-0"
          >
            <div className="space-y-2">
              <h4 className="text-lg font-semibold text-gray-800">
                {record?.fieldOfStudy || 'نام رشته'}
              </h4>
              <div className="text-gray-600 space-y-1">
                <p>
                  <span className="font-medium">دانشگاه:</span> {record?.universityName || '-'}
                </p>
                <p>
                  <span className="font-medium">سال تحصیلی:</span> {record?.academicYear || '-'}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default EducationPreview
