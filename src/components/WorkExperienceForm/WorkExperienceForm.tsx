import { Form, Input, Button } from 'antd'
import { PlusOutlined, DeleteOutlined } from '@ant-design/icons'
import { FormInstance } from 'antd/es/form'
import { WorkExperience } from '../../types/cv.types'
import useTranslations from '../../hooks/useTranslations'

interface WorkExperienceFormProps {
  form: FormInstance
  value: WorkExperience[]
  onChange: (nextValue: WorkExperience[]) => void
}

const WorkExperienceForm = ({ form, value, onChange }: WorkExperienceFormProps) => {
  const t = useTranslations()

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-semibold text-gray-700">
          {t.workExpFormTitle}
        </h2>
      </div>

      <Form
        form={form}
        layout="vertical"
        initialValues={{ workExperiences: value }}
        onValuesChange={(_, values) => {
          onChange(values.workExperiences || [])
        }}
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
                  {t.workExpFormItemTitlePrefix} {name + 1}
                    </h3>
                    <Button
                      type="text"
                      danger
                      icon={<DeleteOutlined />}
                      onClick={() => {
                        remove(name)
                        onChange(form.getFieldValue('workExperiences') || [])
                      }}
                      size="small"
                    >
                      {t.workExpFormDelete}
                    </Button>
                  </div>

                  <div className="space-y-4">
                    <Form.Item
                      {...restField}
                      name={[name, 'title']}
                      label={t.workExpJobTitleLabel}
                      rules={[
                        { required: true, message: t.workExpJobTitleRequired },
                      ]}
                    >
                      <Input
                        placeholder={t.workExpJobTitlePlaceholder}
                        size="large"
                      />
                    </Form.Item>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <Form.Item
                        {...restField}
                        name={[name, 'date']}
                        label={t.workExpDateLabel}
                        rules={[
                          { required: true, message: t.workExpDateRequired },
                        ]}
                      >
                        <Input
                          placeholder={t.workExpDatePlaceholder}
                          size="large"
                        />
                      </Form.Item>

                      <Form.Item
                        {...restField}
                        name={[name, 'position']}
                        label={t.workExpPositionLabel}
                        rules={[
                          { required: true, message: t.workExpPositionRequired },
                        ]}
                      >
                        <Input
                          placeholder={t.workExpPositionPlaceholder}
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
                    onChange(form.getFieldValue('workExperiences') || [])
                  }}
                  block
                  icon={<PlusOutlined />}
                  size="large"
                >
                  {t.workExpAddButton}
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
