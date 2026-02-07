import { Form, Input, Button } from 'antd'
import { PlusOutlined, DeleteOutlined } from '@ant-design/icons'
import { FormInstance } from 'antd/es/form'
import { EducationRecord } from '../../types/cv.types'

interface EducationFormProps {
  form: FormInstance
  value: EducationRecord[]
  onChange: (nextValue: EducationRecord[]) => void
}

const EducationForm = ({ form, value, onChange }: EducationFormProps) => {
  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-semibold text-gray-700">
          سوابق تحصیلی
        </h2>
      </div>

      <Form
        form={form}
        layout="vertical"
        initialValues={{ educationRecords: value }}
        onValuesChange={(_, values) => {
          onChange(values.educationRecords || [])
        }}
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
                        onChange(form.getFieldValue('educationRecords') || [])
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
                      label="رشته تحصیلی"
                      rules={[
                        { required: true, message: 'لطفا رشته تحصیلی را وارد کنید' },
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
                          placeholder="مثال: ۱۴۰۰-۱۴۰۴"
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
                    onChange(form.getFieldValue('educationRecords') || [])
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
