import { useState } from 'react'
import { Button, Space } from 'antd'
import { FullscreenOutlined, PrinterOutlined } from '@ant-design/icons'
import FullscreenPreview from '../FullscreenPreview/FullscreenPreview'
import CVPreviewContent from '../CVPreviewContent/CVPreviewContent'
import LanguageSwitcher from '../LanguageSwitcher'
import ThemeDrawer from '../ThemeDrawer'
import ThemePreviewWrapper from '../ThemePreviewWrapper'
import useTranslations from '../../hooks/useTranslations'

const CVPreview = () => {
  const t = useTranslations()
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
          <h2 className="text-2xl font-semibold text-gray-700">{t.previewTitle}</h2>
          <LanguageSwitcher size="small" showLabel={false} />
        </div>
        <Space>
          <Button
            icon={<FullscreenOutlined />}
            onClick={handleFullscreen}
            type="default"
          >
            {t.previewFullscreenButton}
          </Button>
          <Button
            icon={<PrinterOutlined />}
            onClick={handlePrint}
            type="primary"
          >
            {t.previewPrintButton}
          </Button>
        </Space>
      </div>

      <div className="rounded-lg p-6 flex-1 border border-gray-200 print-content overflow-auto">
        <ThemePreviewWrapper className="min-h-full rounded-lg p-4">
          <CVPreviewContent />
        </ThemePreviewWrapper>
      </div>

      <ThemeDrawer />
    </div>
  )
}

export default CVPreview
