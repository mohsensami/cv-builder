import { Button, Input, message } from 'antd'
import { PlusOutlined, DeleteOutlined } from '@ant-design/icons'
import { useState } from 'react'
import useTranslations from '../../hooks/useTranslations'

interface SkillsFormProps {
  skills: string[]
  onChange: (nextSkills: string[]) => void
}

const SkillsForm = ({ skills, onChange }: SkillsFormProps) => {
  const t = useTranslations()
  const [skillInput, setSkillInput] = useState('')

  const handleAddSkill = () => {
    const trimmedSkill = skillInput.trim()
    if (!trimmedSkill) {
      message.error(t.skillsFormSkillNameRequired)
      return
    }

    if (skills.includes(trimmedSkill)) {
      message.info(t.skillsFormDuplicateMessage)
      return
    }

    onChange([...skills, trimmedSkill])
    setSkillInput('')
  }

  const handleRemoveSkill = (index: number) => {
    onChange(skills.filter((_, i) => i !== index))
  }

  return (
    <div className="space-y-4">
      <div className="flex flex-col lg:flex-row gap-3 items-stretch lg:items-end">
        <div className="flex-1">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            {t.skillsFormSkillNameLabel}
          </label>
          <Input
            placeholder={t.skillsFormSkillNamePlaceholder}
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
          {t.skillsFormAddButton}
        </Button>
      </div>

      <div className="space-y-3">
        {skills.length === 0 ? (
          <p className="text-gray-500 text-sm">{t.skillsFormEmptyMessage}</p>
        ) : (
          skills.map((skill, index) => (
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
                {t.skillsFormDelete}
              </Button>
            </div>
          ))
        )}
      </div>
    </div>
  )
}

export default SkillsForm
