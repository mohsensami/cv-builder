import { Form, Input, Button, message } from 'antd'
import { SaveOutlined } from '@ant-design/icons'
import { useState, useEffect } from 'react'
import { useCV } from '../../contexts'
import { CVData } from '../../types/cv.types'
import WorkExperienceForm from '../WorkExperienceForm/WorkExperienceForm'

const CVForm = () => {
  const { cvData, setCVData } = useCV()
  const [form] = Form.useForm()
  const [hasChanges, setHasChanges] = useState(false)

  // Load data from context when it changes (but not from form changes)
  useEffect(() => {
    form.setFieldsValue({
      fullName: cvData.fullName,
      phone: cvData.phone,
      email: cvData.email,
    })
    setHasChanges(false)
  }, [cvData.fullName, cvData.phone, cvData.email, form])

  const handleValuesChange = () => {
    setHasChanges(true)
  }

  const handleSave = async () => {
    try {
      const values = await form.validateFields()
      const updatedData: Partial<CVData> = {
        fullName: values.fullName || '',
        phone: values.phone || '',
        email: values.email || '',
      }
      
      setCVData((prev) => ({
        ...prev,
        ...updatedData,
      }))
      
      setHasChanges(false)
      message.success('اطلاعات با موفقیت ذخیره شد')
    } catch (error) {
      message.error('لطفا تمام فیلدهای الزامی را پر کنید')
    }
  }

  return (
    <div className="space-y-8">
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-semibold text-gray-700">
            مشخصات فردی
          </h2>
          <Button
            type="primary"
            icon={<SaveOutlined />}
            onClick={handleSave}
            disabled={!hasChanges}
            size="large"
          >
            ذخیره
          </Button>
        </div>
        
        <Form
          form={form}
          layout="vertical"
          initialValues={{
            fullName: cvData.fullName,
            phone: cvData.phone,
            email: cvData.email,
          }}
          onValuesChange={handleValuesChange}
          autoComplete="off"
        >
          <div className='lg:grid lg:grid-cols-3 gap-2 w-100'>
            <Form.Item
              label="نام و نام خانوادگی"
              name="fullName"
              rules={[{ required: true, message: 'لطفا نام و نام خانوادگی خود را وارد کنید' }]}
            >
              <Input 
                placeholder="نام و نام خانوادگی خود را وارد کنید"
                size="large"
              />
            </Form.Item>
            <Form.Item
              label="تلفن تماس"
              name="phone"
              rules={[{ required: true, message: 'لطفا تلفن تماس خود را وارد کنید' }]}
            >
              <Input 
                placeholder="تلفن تماس خود را وارد کنید"
                size="large"
              />
            </Form.Item>
            <Form.Item
              label="ایمیل"
              name="email"
              rules={[
                { required: true, message: 'لطفا ایمیل خود را وارد کنید' },
                { type: 'email', message: 'لطفا یک ایمیل معتبر وارد کنید' }
              ]}
            >
              <Input 
                placeholder="ایمیل خود را وارد کنید"
                size="large"
              />
            </Form.Item>
          </div>
        </Form>
      </div>

      <div className="border-t border-gray-200 pt-8">
        <WorkExperienceForm />
      </div>
    </div>
  )
}

export default CVForm
