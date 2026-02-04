import { Form, Input, Button, message } from 'antd'
import { PlusOutlined, DeleteOutlined, SaveOutlined } from '@ant-design/icons'
import { useState, useEffect } from 'react'
import { useCV } from '../../contexts'
import { WorkExperience } from '../../types/cv.types'

const WorkExperienceForm = () => {
  const { cvData, setCVData } = useCV()
  const [form] = Form.useForm()
  const [hasChanges, setHasChanges] = useState(false)

  // Load data from context when it changes (but not from form changes)
  useEffect(() => {
    form.setFieldsValue({ workExperiences: cvData.workExperiences })
    setHasChanges(false)
  }, [cvData.workExperiences, form])

  const handleValuesChange = () => {
    setHasChanges(true)
  }

  const handleSave = async () => {
    try {
      const values = await form.validateFields()
      const workExperiences: WorkExperience[] = values.workExperiences || []
      
      // Filter out undefined or null values
      const validExperiences = workExperiences.filter(
        (exp) => exp && typeof exp === 'object'
      )
      
      setCVData((prev) => ({
        ...prev,
        workExperiences: validExperiences,
      }))
      
      setHasChanges(false)
      message.success('تجربه‌های کاری با موفقیت ذخیره شد')
    } catch (error) {
      message.error('لطفا تمام فیلدهای الزامی را پر کنید')
    }
  }

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-semibold text-gray-700">
          تجربه‌های کاری
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
        initialValues={{ workExperiences: cvData.workExperiences }}
        onValuesChange={handleValuesChange}
        autoComplete="off"
      >
        <Form.List name="workExperiences">
          {(fields, { add, remove }) => (
            <>
              {fields.map(({ key, name, ...restField }) => (
                <div
                  key={key}
                  className="p-4 border border-gray-200 rounded-lg mb-4 bg-gray-50"
                >
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-lg font-medium text-gray-700">
                      تجربه کاری {name + 1}
                    </h3>
                    <Button
                      type="text"
                      danger
                      icon={<DeleteOutlined />}
                      onClick={() => {
                        remove(name)
                        setHasChanges(true)
                      }}
                      size="small"
                    >
                      حذف
                    </Button>
                  </div>

                  <div className="space-y-4">
                    <Form.Item
                      {...restField}
                      name={[name, 'title']}
                      label="عنوان شغل"
                      rules={[
                        { required: true, message: 'لطفا عنوان شغل را وارد کنید' },
                      ]}
                    >
                      <Input
                        placeholder="مثال: توسعه‌دهنده فرانت‌اند"
                        size="large"
                      />
                    </Form.Item>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <Form.Item
                        {...restField}
                        name={[name, 'date']}
                        label="تاریخ شمسی"
                        rules={[
                          { required: true, message: 'لطفا تاریخ را وارد کنید' },
                        ]}
                      >
                        <Input
                          placeholder="مثال: ۱۴۰۲/۰۵/۱۵"
                          size="large"
                        />
                      </Form.Item>

                      <Form.Item
                        {...restField}
                        name={[name, 'position']}
                        label="سمت شغلی"
                        rules={[
                          { required: true, message: 'لطفا سمت شغلی را وارد کنید' },
                        ]}
                      >
                        <Input
                          placeholder="مثال: توسعه‌دهنده React"
                          size="large"
                        />
                      </Form.Item>
                    </div>
                  </div>
                </div>
              ))}

              <Form.Item>
                <Button
                  type="dashed"
                  onClick={() => {
                    add({ title: '', date: '', position: '' })
                    setHasChanges(true)
                  }}
                  block
                  icon={<PlusOutlined />}
                  size="large"
                >
                  افزودن تجربه کاری
                </Button>
              </Form.Item>
            </>
          )}
        </Form.List>
      </Form>
    </div>
  )
}

export default WorkExperienceForm
