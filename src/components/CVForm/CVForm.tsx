import { Form, Input } from 'antd'
import { useEffect } from 'react'
import { useCV } from '../../contexts'

const CVForm = () => {
  const { cvData, updateCVData } = useCV()
  const [form] = Form.useForm()

  useEffect(() => {
    form.setFieldsValue(cvData)
  }, [cvData, form])

  const handleValuesChange = (_: any, allValues: typeof cvData) => {
    Object.keys(allValues).forEach((key) => {
      const field = key as keyof typeof cvData
      if (allValues[field] !== undefined) {
        updateCVData(field, allValues[field] || '')
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
          rules={[{ required: true, message: 'لطفا ایمیل خود را وارد کنید' }]}
        >
          <Input 
            placeholder="ایمیل خود را وارد کنید"
            size="large"
          />
        </Form.Item>
</div>
        
      </Form>
    </div>
  )
}

export default CVForm
