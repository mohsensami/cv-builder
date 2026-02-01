import { Form, Input } from 'antd'
import { useEffect } from 'react'
import { CVData } from '../../types/cv.types'

interface CVFormProps {
  cvData: CVData
  onUpdate: (field: keyof CVData, value: string) => void
}

const CVForm = ({ cvData, onUpdate }: CVFormProps) => {
  const [form] = Form.useForm()

  useEffect(() => {
    form.setFieldsValue(cvData)
  }, [cvData, form])

  const handleValuesChange = (_: any, allValues: CVData) => {
    Object.keys(allValues).forEach((key) => {
      const field = key as keyof CVData
      if (allValues[field] !== undefined) {
        onUpdate(field, allValues[field] || '')
      }
    })
  }

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold text-gray-700 mb-6">
        اطلاعات رزومه
      </h2>
      
      <Form
        form={form}
        layout="vertical"
        initialValues={cvData}
        onValuesChange={handleValuesChange}
        autoComplete="off"
      >
        <Form.Item
          label="نام"
          name="firstName"
          rules={[{ required: false, message: 'لطفا نام خود را وارد کنید' }]}
        >
          <Input 
            placeholder="نام خود را وارد کنید"
            size="large"
          />
        </Form.Item>
        
        <Form.Item
          label="نام خانوادگی"
          name="lastName"
          rules={[{ required: false, message: 'لطفا نام خانوادگی خود را وارد کنید' }]}
        >
          <Input 
            placeholder="نام خانوادگی خود را وارد کنید"
            size="large"
          />
        </Form.Item>
      </Form>
    </div>
  )
}

export default CVForm
