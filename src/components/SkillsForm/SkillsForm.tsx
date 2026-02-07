import { Button, Input, message } from 'antd'
import { PlusOutlined, DeleteOutlined } from '@ant-design/icons'
import { useState } from 'react'
import { useCV } from '../../contexts'

const SkillsForm = () => {
  const { cvData, setCVData } = useCV()
  const [skillInput, setSkillInput] = useState('')

  const handleAddSkill = () => {
    const trimmedSkill = skillInput.trim()
    if (!trimmedSkill) {
      message.error('لطفا نام مهارت را وارد کنید')
      return
    }

    if (cvData.skills.includes(trimmedSkill)) {
      message.info('این مهارت قبلا اضافه شده است')
      return
    }

    const updatedSkills = [...cvData.skills, trimmedSkill]
    setCVData((prev) => ({
      ...prev,
      skills: updatedSkills,
    }))
    setSkillInput('')
  }

  const handleRemoveSkill = (index: number) => {
    const updatedSkills = cvData.skills.filter((_, i) => i !== index)
    setCVData((prev) => ({
      ...prev,
      skills: updatedSkills,
    }))
  }

  return (
    <div className="space-y-4">
      <div className="flex flex-col lg:flex-row gap-3 items-stretch lg:items-end">
        <div className="flex-1">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            مهارت جدید
          </label>
          <Input
            placeholder="مثلا: جاوااسکریپت"
            size="large"
            value={skillInput}
            onChange={(event) => setSkillInput(event.target.value)}
            onPressEnter={handleAddSkill}
          />
        </div>
        <Button
          type="primary"
          icon={<PlusOutlined />}
          onClick={handleAddSkill}
          size="large"
          className="lg:w-auto"
        >
          افزودن مهارت
        </Button>
      </div>

      <div className="space-y-3">
        {cvData.skills.length === 0 ? (
          <p className="text-gray-500 text-sm">
            هنوز مهارتی اضافه نشده است
          </p>
        ) : (
          cvData.skills.map((skill, index) => (
            <div
              key={`${skill}-${index}`}
              className="flex items-center justify-between p-3 border border-gray-200 rounded-lg bg-gray-50"
            >
              <span className="text-gray-700 font-medium">{skill}</span>
              <Button
                type="text"
                danger
                icon={<DeleteOutlined />}
                onClick={() => handleRemoveSkill(index)}
                size="small"
              >
                حذف
              </Button>
            </div>
          ))
        )}
      </div>
    </div>
  )
}

export default SkillsForm
