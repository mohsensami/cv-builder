import { Form, Input, Button, message } from 'antd'
import { PlusOutlined, DeleteOutlined, SaveOutlined } from '@ant-design/icons'
import { useState, useEffect } from 'react'
import { useCV } from '../../contexts'
import { EducationRecord } from '../../types/cv.types'

const EducationForm = () => {
  const { cvData, setCVData } = useCV()
  const [form] = Form.useForm()
  const [hasChanges, setHasChanges] = useState(false)

  // Load data from context when it changes (but not from form changes)
  useEffect(() => {
    form.setFieldsValue({ educationRecords: cvData.educationRecords })
    setHasChanges(false)
  }, [cvData.educationRecords, form])

  const handleValuesChange = () => {
    setHasChanges(true)
  }

  const handleSave = async () => {
    try {
      const values = await form.validateFields()
      const educationRecords: EducationRecord[] = values.educationRecords || []

      const validRecords = educationRecords.filter(
        (record) => record && typeof record === 'object'
      )

      setCVData((prev) => ({
        ...prev,
        educationRecords: validRecords,
      }))

      setHasChanges(false)
      message.success('سوابق تحصیلی با موفقیت ذخیره شد')
    } catch (error) {
      message.error('لطفا تمام فیلدهای الزامی را پر کنید')
    }
  }

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-semibold text-gray-700">
          سوابق تحصیلی
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
        initialValues={{ educationRecords: cvData.educationRecords }}
        onValuesChange={handleValuesChange}
        autoComplete="off"
      >
        <Form.List name="educationRecords">
          {(fields, { add, remove }) => (
            <>
              {fields.map(({ key, name, ...restField }) => (
                <div
                  key={key}
                  className="p-4 border border-gray-200 rounded-lg mb-4 bg-gray-50"
                >
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-lg font-medium text-gray-700">
                      سابقه تحصیلی {name + 1}
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
                      name={[name, 'fieldOfStudy']}
                      label="نام رشته"
                      rules={[
                        { required: true, message: 'لطفا نام رشته را وارد کنید' },
                      ]}
                    >
                      <Input
                        placeholder="مثال: مهندسی کامپیوتر"
                        size="large"
                      />
                    </Form.Item>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <Form.Item
                        {...restField}
                        name={[name, 'universityName']}
                        label="نام دانشگاه"
                        rules={[
                          { required: true, message: 'لطفا نام دانشگاه را وارد کنید' },
                        ]}
                      >
                        <Input
                          placeholder="مثال: دانشگاه تهران"
                          size="large"
                        />
                      </Form.Item>

                      <Form.Item
                        {...restField}
                        name={[name, 'academicYear']}
                        label="سال تحصیلی"
                        rules={[
                          { required: true, message: 'لطفا سال تحصیلی را وارد کنید' },
                        ]}
                      >
                        <Input
                          placeholder="مثال: ۱۳۹۸-۱۴۰۲"
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
                    add({ fieldOfStudy: '', universityName: '', academicYear: '' })
                    setHasChanges(true)
                  }}
                  block
                  icon={<PlusOutlined />}
                  size="large"
                >
                  افزودن سابقه تحصیلی
                </Button>
              </Form.Item>
            </>
          )}
        </Form.List>
      </Form>
    </div>
  )
}

export default EducationForm
