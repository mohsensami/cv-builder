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

export interface CVData {
  fullName: string
  phone: string
  email: string
  workExperiences: WorkExperience[]
  educationRecords: EducationRecord[]
}
