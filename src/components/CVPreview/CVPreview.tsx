import { useState } from 'react'
import { Button, Space } from 'antd'
import { FullscreenOutlined, PrinterOutlined } from '@ant-design/icons'
import { CVData } from '../../types/cv.types'
import FullscreenPreview from '../FullscreenPreview/FullscreenPreview'
import CVPreviewContent from '../CVPreviewContent/CVPreviewContent'

interface CVPreviewProps {
  cvData: CVData
}

const CVPreview = ({ cvData }: CVPreviewProps) => {
  const [isFullscreenOpen, setIsFullscreenOpen] = useState(false)

  const handlePrint = () => {
    window.print()
  }

  const handleFullscreen = () => {
    setIsFullscreenOpen(true)
  }

  return (
    <>
      <div className="space-y-4">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold text-gray-700">
            پیش‌نمایش رزومه
          </h2>
          <Space>
            <Button
              icon={<FullscreenOutlined />}
              onClick={handleFullscreen}
              type="default"
            >
              تمام صفحه
            </Button>
            <Button
              icon={<PrinterOutlined />}
              onClick={handlePrint}
              type="primary"
            >
              پرینت
            </Button>
          </Space>
        </div>
        
        <div className="bg-gray-50 rounded-lg p-6 min-h-[400px] border border-gray-200 print-content">
          <CVPreviewContent cvData={cvData} />
        </div>
      </div>

      <FullscreenPreview
        open={isFullscreenOpen}
        onClose={() => setIsFullscreenOpen(false)}
        cvData={cvData}
      />
    </>
  )
}

export default CVPreview
