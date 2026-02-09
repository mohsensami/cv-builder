import { Form, Input, Button, message, Collapse } from 'antd'
import { SaveOutlined } from '@ant-design/icons'
import { useState, useEffect } from 'react'
import { useCV } from '../../contexts'
import { CVData, WorkExperience, EducationRecord, LanguageSkill } from '../../types/cv.types'
import WorkExperienceForm from '../WorkExperienceForm/WorkExperienceForm'
import EducationForm from '../EducationForm/EducationForm'
import SkillsForm from '../SkillsForm/SkillsForm'
import LanguagesForm from '../LanguagesForm/LanguagesForm'
import TextArea from 'antd/es/input/TextArea'

const CVForm = () => {
  const { cvData, setCVData } = useCV()
  const [form] = Form.useForm()
  const [workForm] = Form.useForm()
  const [educationForm] = Form.useForm()
  
  // Local state for all form data
  const [workExperiencesDraft, setWorkExperiencesDraft] = useState<WorkExperience[]>(cvData.workExperiences)
  const [educationRecordsDraft, setEducationRecordsDraft] = useState<EducationRecord[]>(cvData.educationRecords)
  const [skillsDraft, setSkillsDraft] = useState<string[]>(cvData.skills)
  const [languagesDraft, setLanguagesDraft] = useState<LanguageSkill[]>(cvData.languages)
  const [hasChanges, setHasChanges] = useState(false)

  // Load data from context when it changes externally
  useEffect(() => {
    form.setFieldsValue({
      fullName: cvData.fullName,
      phone: cvData.phone,
      email: cvData.email,
      aboutMe: cvData.aboutMe,
    })
    workForm.setFieldsValue({ workExperiences: cvData.workExperiences })
    educationForm.setFieldsValue({ educationRecords: cvData.educationRecords })
    
    setWorkExperiencesDraft(cvData.workExperiences)
    setEducationRecordsDraft(cvData.educationRecords)
    setSkillsDraft(cvData.skills)
    setLanguagesDraft(cvData.languages)
    setHasChanges(false)
  }, [
    cvData.fullName,
    cvData.phone,
    cvData.email,
    cvData.aboutMe,
    cvData.workExperiences,
    cvData.educationRecords,
    cvData.skills,
    cvData.languages,
    form,
    workForm,
    educationForm,
  ])

  const handleSaveAll = async () => {
    try {
      // Validate all forms
      const personalValues = await form.validateFields()
      const workValues = await workForm.validateFields()
      const educationValues = await educationForm.validateFields()

      // Get validated form values
      const currentWorkExperiences = workValues.workExperiences || workExperiencesDraft
      const currentEducationRecords = educationValues.educationRecords || educationRecordsDraft

      // Filter out invalid entries
      const workExperiences: WorkExperience[] = currentWorkExperiences.filter(
        (exp: WorkExperience) => exp && typeof exp === 'object' && exp.title && exp.date && exp.position
      )
      const educationRecords: EducationRecord[] = currentEducationRecords.filter(
        (record: EducationRecord) => record && typeof record === 'object' && record.fieldOfStudy && record.universityName && record.academicYear
      )

      // Prepare final data
      const updatedData: CVData = {
        fullName: personalValues.fullName || '',
        phone: personalValues.phone || '',
        email: personalValues.email || '',
        aboutMe: personalValues.aboutMe || '',
        workExperiences,
        educationRecords,
        skills: skillsDraft,
        languages: languagesDraft,
      }

      // Save to context (which will save to localStorage)
      setCVData(updatedData)
      setHasChanges(false)
      message.success('اطلاعات با موفقیت ذخیره شد')
    } catch (error) {
      message.error('لطفا تمام فیلدهای الزامی را پر کنید')
    }
  }

  return (
    <div className="space-y-4">
      <div className="flex justify-end items-center mb-4">
        <Button
          type="primary"
          icon={<SaveOutlined />}
          onClick={handleSaveAll}
          disabled={!hasChanges}
          size="large"
        >
          ذخیره همه اطلاعات
        </Button>
      </div>

      <Collapse
        accordion
        defaultActiveKey={['personal-info']}
        items={[
          {
            key: 'personal-info',
            label: 'مشخصات فردی',
            children: (
              <div className="space-y-6">
                <Form
                  form={form}
                  layout="vertical"
                  initialValues={{
                    fullName: cvData.fullName,
                    phone: cvData.phone,
                    email: cvData.email,
                    aboutMe: cvData.aboutMe,
                  }}
                  onValuesChange={() => {
                    setHasChanges(true)
                  }}
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
                    <Form.Item
                      label="درباره‌ی من"
                      name="aboutMe"
                      rules={[
                        { required: true, message: 'لطفا درباره‌ی من  خود را وارد کنید' },
                        { type: 'string', message: 'لطفا یک درباره‌ی من  معتبر وارد کنید' }
                      ]}
                    >
                     <TextArea placeholder="از شخصیت و ویژگی‌های حرفه‌ای و شخصی خود بنویسید..."
                        size="large" rows={4} className='w-full' />
                    </Form.Item>
                </Form>
              </div>
            ),
          },
          {
            key: 'work-experience',
            label: 'تجربه‌های کاری',
            children: (
              <div className="pt-2">
                <WorkExperienceForm
                  form={workForm}
                  value={workExperiencesDraft}
                  onChange={(nextValue) => {
                    setWorkExperiencesDraft(nextValue)
                    setHasChanges(true)
                  }}
                />
              </div>
            ),
          },
          {
            key: 'professional-skills',
            label: 'مهارت‌های حرفه‌ای',
            children: (
              <div className="pt-2">
                <SkillsForm
                  skills={skillsDraft}
                  onChange={(nextSkills) => {
                    setSkillsDraft(nextSkills)
                    setHasChanges(true)
                  }}
                />
              </div>
            ),
          },
          {
            key: 'languages',
            label: 'زبان‌های مسلط',
            children: (
              <div className="pt-2">
                <LanguagesForm
                  languages={languagesDraft}
                  onChange={(nextLanguages) => {
                    setLanguagesDraft(nextLanguages)
                    setHasChanges(true)
                  }}
                />
              </div>
            ),
          },
          {
            key: 'education-records',
            label: 'سوابق تحصیلی',
            children: (
              <div className="pt-2">
                <EducationForm
                  form={educationForm}
                  value={educationRecordsDraft}
                  onChange={(nextValue) => {
                    setEducationRecordsDraft(nextValue)
                    setHasChanges(true)
                  }}
                />
              </div>
            ),
          },
        ]}
      />
    </div>
  )
}

export default CVForm
