import { CVData } from '../../types/cv.types'
import FormField from '../FormField/FormField'

interface CVFormProps {
  cvData: CVData
  onUpdate: (field: keyof CVData, value: string) => void
}

const CVForm = ({ cvData, onUpdate }: CVFormProps) => {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold text-gray-700 mb-6">
        اطلاعات رزومه
      </h2>
      
      <FormField
        label="نام"
        value={cvData.firstName}
        onChange={(value) => onUpdate('firstName', value)}
        placeholder="نام خود را وارد کنید"
      />
      
      <FormField
        label="نام خانوادگی"
        value={cvData.lastName}
        onChange={(value) => onUpdate('lastName', value)}
        placeholder="نام خانوادگی خود را وارد کنید"
      />
    </div>
  )
}

export default CVForm
