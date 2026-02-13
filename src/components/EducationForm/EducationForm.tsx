import { Form, Input, Button } from 'antd'
import { PlusOutlined, DeleteOutlined } from '@ant-design/icons'
import { FormInstance } from 'antd/es/form'
import { EducationRecord } from '../../types/cv.types'
import useTranslations from '../../hooks/useTranslations'

interface EducationFormProps {
  form: FormInstance
  value: EducationRecord[]
  onChange: (nextValue: EducationRecord[]) => void
}

const EducationForm = ({ form, value, onChange }: EducationFormProps) => {
  const t = useTranslations()

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-semibold text-gray-700">{t.educationFormTitle}</h2>
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
                      {t.educationFormItemTitlePrefix} {name + 1}
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
                      {t.educationFormDelete}
                    </Button>
                  </div>

                  <div className="space-y-4">
                    <Form.Item
                      {...restField}
                      name={[name, 'fieldOfStudy']}
                      label={t.educationFormFieldOfStudyLabel}
                      rules={[
                        { required: true, message: t.educationFormFieldOfStudyRequired },
                      ]}
                    >
                      <Input
                        placeholder={t.educationFormFieldOfStudyPlaceholder}
                        size="large"
                      />
                    </Form.Item>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <Form.Item
                        {...restField}
                        name={[name, 'universityName']}
                        label={t.educationFormUniversityNameLabel}
                        rules={[
                          { required: true, message: t.educationFormUniversityNameRequired },
                        ]}
                      >
                        <Input
                          placeholder={t.educationFormUniversityNamePlaceholder}
                          size="large"
                        />
                      </Form.Item>

                      <Form.Item
                        {...restField}
                        name={[name, 'academicYear']}
                        label={t.educationFormAcademicYearLabel}
                        rules={[
                          { required: true, message: t.educationFormAcademicYearRequired },
                        ]}
                      >
                        <Input
                          placeholder={t.educationFormAcademicYearPlaceholder}
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
                  {t.educationFormAddButton}
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
