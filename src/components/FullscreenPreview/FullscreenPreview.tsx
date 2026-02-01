import { Modal, Button, Space } from 'antd'
import { PrinterOutlined, CloseOutlined } from '@ant-design/icons'
import { CVData } from '../../types/cv.types'
import CVPreviewContent from '../CVPreviewContent/CVPreviewContent'

interface FullscreenPreviewProps {
  open: boolean
  onClose: () => void
  cvData: CVData
}

const FullscreenPreview = ({ open, onClose, cvData }: FullscreenPreviewProps) => {
  const handlePrint = () => {
    window.print()
  }

  return (
    <Modal
      open={open}
      onCancel={onClose}
      footer={null}
      width="90%"
      style={{ top: 20 }}
      className="fullscreen-preview-modal"
      closeIcon={<CloseOutlined />}
    >
      <div className="p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold text-gray-700">
            پیش‌نمایش رزومه
          </h2>
          <Space>
            <Button
              icon={<PrinterOutlined />}
              onClick={handlePrint}
              type="primary"
              size="large"
            >
              پرینت
            </Button>
            <Button
              icon={<CloseOutlined />}
              onClick={onClose}
              size="large"
            >
              بستن
            </Button>
          </Space>
        </div>
        
        <div className="bg-white rounded-lg p-8 border border-gray-200 shadow-sm print-content">
          <CVPreviewContent cvData={cvData} />
        </div>
      </div>
    </Modal>
  )
}

export default FullscreenPreview
