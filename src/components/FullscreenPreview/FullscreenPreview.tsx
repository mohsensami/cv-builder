import { useEffect, useRef } from 'react'
import { Button, Space } from 'antd'
import { PrinterOutlined, FullscreenExitOutlined } from '@ant-design/icons'
import CVPreviewContent from '../CVPreviewContent/CVPreviewContent'
import useTranslations from '../../hooks/useTranslations'

interface FullscreenPreviewProps {
  onExit: () => void
}

const FullscreenPreview = ({ onExit }: FullscreenPreviewProps) => {
  const t = useTranslations()
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const enterFullscreen = async () => {
      if (containerRef.current) {
        try {
          await containerRef.current.requestFullscreen()
        } catch (error) {
          console.error('Error entering fullscreen:', error)
        }
      }
    }

    enterFullscreen()

    const handleFullscreenChange = () => {
      if (!document.fullscreenElement) {
        onExit()
      }
    }

    document.addEventListener('fullscreenchange', handleFullscreenChange)

    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange)
    }
  }, [onExit])

  const handlePrint = () => {
    window.print()
  }

  const handleExitFullscreen = async () => {
    try {
      if (document.fullscreenElement) {
        await document.exitFullscreen()
      }
    } catch (error) {
      console.error('Error exiting fullscreen:', error)
    }
    onExit()
  }

  return (
    <div
      ref={containerRef}
      className="w-full h-screen bg-gray-50 flex flex-col"
    >
      <div className="flex justify-between items-center p-6 bg-white shadow-sm border-b border-gray-200">
        <h2 className="text-2xl font-semibold text-gray-700">{t.previewTitle}</h2>
        <Space>
          <Button
            icon={<PrinterOutlined />}
            onClick={handlePrint}
            type="primary"
            size="large"
          >
            {t.previewPrintButton}
          </Button>
          <Button
            icon={<FullscreenExitOutlined />}
            onClick={handleExitFullscreen}
            size="large"
          >
            {t.previewExitFullscreenButton}
          </Button>
        </Space>
      </div>
      
      <div className="flex-1 overflow-auto p-8">
        <div className="bg-white rounded-lg p-8 border border-gray-200 shadow-sm print-content max-w-4xl mx-auto">
          <CVPreviewContent />
        </div>
      </div>
    </div>
  )
}

export default FullscreenPreview
