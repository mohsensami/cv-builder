import { useState } from 'react'
import { Button, Space } from 'antd'
import { FullscreenOutlined, PrinterOutlined } from '@ant-design/icons'
import FullscreenPreview from '../FullscreenPreview/FullscreenPreview'
import CVPreviewContent from '../CVPreviewContent/CVPreviewContent'
import LanguageSwitcher from '../LanguageSwitcher'

const CVPreview = () => {
  const [isFullscreen, setIsFullscreen] = useState(false)

  const handlePrint = () => {
    window.print()
  }

  const handleFullscreen = () => {
    setIsFullscreen(true)
  }

  if (isFullscreen) {
    return <FullscreenPreview onExit={() => setIsFullscreen(false)} />
  }

  return (
    <div className="space-y-4 h-full flex flex-col">
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center gap-3">
          <h2 className="text-2xl font-semibold text-gray-700">
            پیش‌نمایش رزومه
          </h2>
          <LanguageSwitcher size="small" showLabel={false} />
        </div>
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
      
      <div className="bg-gray-50 rounded-lg p-6 flex-1 border border-gray-200 print-content overflow-auto">
        <CVPreviewContent />
      </div>
    </div>
  )
}

export default CVPreview
