import { CVData } from '../../types/cv.types'

interface CVPreviewProps {
  cvData: CVData
}

const CVPreview = ({ cvData }: CVPreviewProps) => {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-semibold text-gray-700 mb-6">
        پیش‌نمایش رزومه
      </h2>
      
      <div className="bg-gray-50 rounded-lg p-6 min-h-[400px] border border-gray-200">
        <div className="space-y-4">
          <div className="border-b border-gray-300 pb-4">
            <h1 className="text-3xl font-bold text-gray-800">
              {cvData.firstName || 'نام'} {cvData.lastName || 'نام خانوادگی'}
            </h1>
          </div>
          
          <div className="space-y-2">
            <h3 className="text-lg font-semibold text-gray-700">اطلاعات شخصی</h3>
            <div className="text-gray-600 space-y-1">
              <p>
                <span className="font-medium">نام:</span> {cvData.firstName || '-'}
              </p>
              <p>
                <span className="font-medium">نام خانوادگی:</span> {cvData.lastName || '-'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CVPreview
