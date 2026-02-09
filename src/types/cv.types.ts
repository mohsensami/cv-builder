export interface WorkExperience {
  title: string
  date: string // تاریخ شمسی
  position: string // سمت شغلی
}

export interface EducationRecord {
  fieldOfStudy: string
  universityName: string
  academicYear: string
}

export type LanguageLevel = 'beginner' | 'intermediate' | 'advanced'

export interface LanguageSkill {
  name: string
  level: LanguageLevel
}

export interface CVData {
  fullName: string
  phone: string
  email: string
  aboutMe: string
  workExperiences: WorkExperience[]
  educationRecords: EducationRecord[]
  skills: string[]
  languages: LanguageSkill[]
}
