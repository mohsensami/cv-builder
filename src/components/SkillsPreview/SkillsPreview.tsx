import { useCV } from '../../contexts'

const SkillsPreview = () => {
  const { cvData } = useCV()

  if (!cvData.skills || cvData.skills.length === 0) {
    return null
  }

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold text-gray-700 border-b border-gray-300 pb-2">
        مهارت‌های حرفه‌ای
      </h3>
      <div className="flex flex-wrap gap-2">
        {cvData.skills.map((skill, index) => (
          <span
            key={`${skill}-${index}`}
            className="px-3 py-1 text-sm rounded-full bg-slate-100 text-slate-700 border border-slate-200"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  )
}

export default SkillsPreview
