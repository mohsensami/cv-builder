import { AppLanguage, useLanguage } from '../contexts'

type AppTranslations = {
  // CV preview & personal info
  previewFullNameFallback: string
  previewPersonalInfoTitle: string
  previewLabelFullName: string
  previewLabelPhone: string
  previewLabelEmail: string
  previewLabelAboutMe: string

  // Work experience preview
  previewWorkExperienceTitle: string
  previewWorkExperienceFallbackJobTitle: string
  previewWorkExperienceLabelPosition: string
  previewWorkExperienceLabelDate: string

  // CV form general
  formSaveAll: string
  formSaveSuccess: string
  formSaveErrorRequired: string

  // CV form sections
  formSectionPersonalInfo: string
  formSectionWorkExperience: string
  formSectionSkills: string
  formSectionLanguages: string
  formSectionEducation: string

  // Personal info fields
  formFullNameLabel: string
  formFullNameRequired: string
  formFullNamePlaceholder: string

  formPhoneLabel: string
  formPhoneRequired: string
  formPhonePlaceholder: string

  formEmailLabel: string
  formEmailRequired: string
  formEmailInvalid: string
  formEmailPlaceholder: string

  formAboutMeLabel: string
  formAboutMeRequired: string
  formAboutMeInvalid: string
  formAboutMePlaceholder: string

  // Work experience form
  workExpFormTitle: string
  workExpFormItemTitlePrefix: string
  workExpFormDelete: string

  workExpJobTitleLabel: string
  workExpJobTitleRequired: string
  workExpJobTitlePlaceholder: string

  workExpDateLabel: string
  workExpDateRequired: string
  workExpDatePlaceholder: string

  workExpPositionLabel: string
  workExpPositionRequired: string
  workExpPositionPlaceholder: string

  workExpAddButton: string

  // Languages form
  languagesFormTitle: string
  languagesFormLanguageNameLabel: string
  languagesFormLanguageNamePlaceholder: string
  languagesFormLanguageNameRequired: string
  languagesFormLevelLabel: string
  languagesFormAddButton: string
  languagesFormEmptyMessage: string
  languagesFormDelete: string
  languagesFormDuplicateMessage: string
  languagesLevelBeginner: string
  languagesLevelIntermediate: string
  languagesLevelAdvanced: string

  // Languages preview
  languagesPreviewTitle: string

  // Skills form
  skillsFormSkillNameLabel: string
  skillsFormSkillNamePlaceholder: string
  skillsFormAddButton: string
  skillsFormEmptyMessage: string
  skillsFormDelete: string
  skillsFormSkillNameRequired: string
  skillsFormDuplicateMessage: string

  // Skills preview
  skillsPreviewTitle: string

  // Education form
  educationFormTitle: string
  educationFormItemTitlePrefix: string
  educationFormDelete: string
  educationFormFieldOfStudyLabel: string
  educationFormFieldOfStudyRequired: string
  educationFormFieldOfStudyPlaceholder: string
  educationFormUniversityNameLabel: string
  educationFormUniversityNameRequired: string
  educationFormUniversityNamePlaceholder: string
  educationFormAcademicYearLabel: string
  educationFormAcademicYearRequired: string
  educationFormAcademicYearPlaceholder: string
  educationFormAddButton: string

  // Education preview
  educationPreviewTitle: string
  educationPreviewFallbackField: string
  educationPreviewLabelUniversity: string
  educationPreviewLabelAcademicYear: string

  // Language switcher
  languageSwitcherLabel: string
  languageSwitcherOptionFa: string
  languageSwitcherOptionEn: string

  // CV Preview
  previewTitle: string
  previewFullscreenButton: string
  previewPrintButton: string
  previewExitFullscreenButton: string

  // Theme
  themeDrawerTitle: string
  themePageBackground: string
  themeTextColor: string
  themeHeadingColor: string
  themeAccentColor: string
  themeBorderColor: string
  themeReset: string
}

const TRANSLATIONS: Record<AppLanguage, AppTranslations> = {
  fa: {
    // CV preview & personal info
    previewFullNameFallback: 'نام و نام خانوادگی',
    previewPersonalInfoTitle: 'اطلاعات شخصی',
    previewLabelFullName: 'نام و نام خانوادگی:',
    previewLabelPhone: 'تلفن تماس:',
    previewLabelEmail: 'ایمیل:',
    previewLabelAboutMe: 'درباره‌ی من:',

    // Work experience preview
    previewWorkExperienceTitle: 'تجربه‌های کاری',
    previewWorkExperienceFallbackJobTitle: 'عنوان شغل',
    previewWorkExperienceLabelPosition: 'سمت:',
    previewWorkExperienceLabelDate: 'تاریخ:',

    // CV form general
    formSaveAll: 'ذخیره همه اطلاعات',
    formSaveSuccess: 'اطلاعات با موفقیت ذخیره شد',
    formSaveErrorRequired: 'لطفا تمام فیلدهای الزامی را پر کنید',

    // CV form sections
    formSectionPersonalInfo: 'مشخصات فردی',
    formSectionWorkExperience: 'تجربه‌های کاری',
    formSectionSkills: 'مهارت‌های حرفه‌ای',
    formSectionLanguages: 'زبان‌های مسلط',
    formSectionEducation: 'سوابق تحصیلی',

    // Personal info fields
    formFullNameLabel: 'نام و نام خانوادگی',
    formFullNameRequired: 'لطفا نام و نام خانوادگی خود را وارد کنید',
    formFullNamePlaceholder: 'نام و نام خانوادگی خود را وارد کنید',

    formPhoneLabel: 'تلفن تماس',
    formPhoneRequired: 'لطفا تلفن تماس خود را وارد کنید',
    formPhonePlaceholder: 'تلفن تماس خود را وارد کنید',

    formEmailLabel: 'ایمیل',
    formEmailRequired: 'لطفا ایمیل خود را وارد کنید',
    formEmailInvalid: 'لطفا یک ایمیل معتبر وارد کنید',
    formEmailPlaceholder: 'ایمیل خود را وارد کنید',

    formAboutMeLabel: 'درباره‌ی من',
    formAboutMeRequired: 'لطفا درباره‌ی من خود را وارد کنید',
    formAboutMeInvalid: 'لطفا یک درباره‌ی من معتبر وارد کنید',
    formAboutMePlaceholder: 'از شخصیت و ویژگی‌های حرفه‌ای و شخصی خود بنویسید...',

    // Work experience form
    workExpFormTitle: 'تجربه‌های کاری',
    workExpFormItemTitlePrefix: 'تجربه کاری',
    workExpFormDelete: 'حذف',

    workExpJobTitleLabel: 'عنوان شغل',
    workExpJobTitleRequired: 'لطفا عنوان شغل را وارد کنید',
    workExpJobTitlePlaceholder: 'مثال: توسعه‌دهنده فرانت‌اند',

    workExpDateLabel: 'تاریخ شمسی',
    workExpDateRequired: 'لطفا تاریخ را وارد کنید',
    workExpDatePlaceholder: 'مثال: ۱۴۰۲/۰۵/۱۵',

    workExpPositionLabel: 'سمت شغلی',
    workExpPositionRequired: 'لطفا سمت شغلی را وارد کنید',
    workExpPositionPlaceholder: 'مثال: توسعه‌دهنده React',

    workExpAddButton: 'افزودن تجربه کاری',

    // Languages form
    languagesFormTitle: 'زبان‌های مسلط',
    languagesFormLanguageNameLabel: 'نام زبان',
    languagesFormLanguageNamePlaceholder: 'مثال: انگلیسی',
    languagesFormLanguageNameRequired: 'لطفا نام زبان را وارد کنید',
    languagesFormLevelLabel: 'سطح تسلط',
    languagesFormAddButton: 'افزودن زبان',
    languagesFormEmptyMessage: 'هنوز زبانی اضافه نشده است',
    languagesFormDelete: 'حذف',
    languagesFormDuplicateMessage: 'این زبان با همین سطح قبلاً اضافه شده است',
    languagesLevelBeginner: 'مبتدی',
    languagesLevelIntermediate: 'متوسط',
    languagesLevelAdvanced: 'پیشرفته',

    // Languages preview
    languagesPreviewTitle: 'زبان‌های مسلط',

    // Skills form
    skillsFormSkillNameLabel: 'نام مهارت',
    skillsFormSkillNamePlaceholder: 'مثال: برنامه‌نویسی',
    skillsFormAddButton: 'افزودن مهارت',
    skillsFormEmptyMessage: 'هنوز مهارتی اضافه نشده است',
    skillsFormDelete: 'حذف',
    skillsFormSkillNameRequired: 'لطفا نام مهارت را وارد کنید',
    skillsFormDuplicateMessage: 'این مهارت قبلاً اضافه شده است',

    // Skills preview
    skillsPreviewTitle: 'مهارت‌های حرفه‌ای',

    // Education form
    educationFormTitle: 'سوابق تحصیلی',
    educationFormItemTitlePrefix: 'سابقه تحصیلی',
    educationFormDelete: 'حذف',
    educationFormFieldOfStudyLabel: 'رشته تحصیلی',
    educationFormFieldOfStudyRequired: 'لطفا رشته تحصیلی را وارد کنید',
    educationFormFieldOfStudyPlaceholder: 'مثال: مهندسی کامپیوتر',
    educationFormUniversityNameLabel: 'نام دانشگاه',
    educationFormUniversityNameRequired: 'لطفا نام دانشگاه را وارد کنید',
    educationFormUniversityNamePlaceholder: 'مثال: دانشگاه تهران',
    educationFormAcademicYearLabel: 'سال تحصیلی',
    educationFormAcademicYearRequired: 'لطفا سال تحصیلی را وارد کنید',
    educationFormAcademicYearPlaceholder: 'مثال: ۱۴۰۰-۱۴۰۴',
    educationFormAddButton: 'افزودن سابقه تحصیلی',

    // Education preview
    educationPreviewTitle: 'سوابق تحصیلی',
    educationPreviewFallbackField: 'نام رشته',
    educationPreviewLabelUniversity: 'دانشگاه:',
    educationPreviewLabelAcademicYear: 'سال تحصیلی:',

    // Language switcher
    languageSwitcherLabel: 'زبان رزومه:',
    languageSwitcherOptionFa: 'رزومه فارسی',
    languageSwitcherOptionEn: 'Resume English',

    // CV Preview
    previewTitle: 'پیش‌نمایش رزومه',
    previewFullscreenButton: 'تمام صفحه',
    previewPrintButton: 'پرینت',
    previewExitFullscreenButton: 'خروج از تمام صفحه',

    themeDrawerTitle: 'رنگ و تم رزومه',
    themePageBackground: 'پس‌زمینه صفحه',
    themeTextColor: 'رنگ متن',
    themeHeadingColor: 'رنگ عناوین',
    themeAccentColor: 'رنگ تاکید',
    themeBorderColor: 'رنگ حاشیه',
    themeReset: 'بازگردانی پیش‌فرض',
  },
  en: {
    // CV preview & personal info
    previewFullNameFallback: 'Full Name',
    previewPersonalInfoTitle: 'Personal Information',
    previewLabelFullName: 'Full Name:',
    previewLabelPhone: 'Phone:',
    previewLabelEmail: 'Email:',
    previewLabelAboutMe: 'About Me:',

    // Work experience preview
    previewWorkExperienceTitle: 'Work Experience',
    previewWorkExperienceFallbackJobTitle: 'Job Title',
    previewWorkExperienceLabelPosition: 'Position:',
    previewWorkExperienceLabelDate: 'Date:',

    // CV form general
    formSaveAll: 'Save all information',
    formSaveSuccess: 'Information saved successfully',
    formSaveErrorRequired: 'Please fill in all required fields',

    // CV form sections
    formSectionPersonalInfo: 'Personal Information',
    formSectionWorkExperience: 'Work Experience',
    formSectionSkills: 'Professional Skills',
    formSectionLanguages: 'Languages',
    formSectionEducation: 'Education',

    // Personal info fields
    formFullNameLabel: 'Full Name',
    formFullNameRequired: 'Please enter your full name',
    formFullNamePlaceholder: 'Enter your full name',

    formPhoneLabel: 'Phone',
    formPhoneRequired: 'Please enter your phone number',
    formPhonePlaceholder: 'Enter your phone number',

    formEmailLabel: 'Email',
    formEmailRequired: 'Please enter your email',
    formEmailInvalid: 'Please enter a valid email address',
    formEmailPlaceholder: 'Enter your email address',

    formAboutMeLabel: 'About Me',
    formAboutMeRequired: 'Please enter your about me section',
    formAboutMeInvalid: 'Please enter a valid about me text',
    formAboutMePlaceholder: 'Write about your professional and personal qualities...',

    // Work experience form
    workExpFormTitle: 'Work Experience',
    workExpFormItemTitlePrefix: 'Experience',
    workExpFormDelete: 'Delete',

    workExpJobTitleLabel: 'Job Title',
    workExpJobTitleRequired: 'Please enter a job title',
    workExpJobTitlePlaceholder: 'e.g. Frontend Developer',

    workExpDateLabel: 'Date',
    workExpDateRequired: 'Please enter a date',
    workExpDatePlaceholder: 'e.g. 2023/08/06',

    workExpPositionLabel: 'Position',
    workExpPositionRequired: 'Please enter a position',
    workExpPositionPlaceholder: 'e.g. React Developer',

    workExpAddButton: 'Add work experience',

    // Languages form
    languagesFormTitle: 'Languages',
    languagesFormLanguageNameLabel: 'Language Name',
    languagesFormLanguageNamePlaceholder: 'e.g. English',
    languagesFormLanguageNameRequired: 'Please enter a language name',
    languagesFormLevelLabel: 'Proficiency Level',
    languagesFormAddButton: 'Add Language',
    languagesFormEmptyMessage: 'No languages added yet',
    languagesFormDelete: 'Delete',
    languagesFormDuplicateMessage: 'This language with the same level has already been added',
    languagesLevelBeginner: 'Beginner',
    languagesLevelIntermediate: 'Intermediate',
    languagesLevelAdvanced: 'Advanced',

    // Languages preview
    languagesPreviewTitle: 'Languages',

    // Skills form
    skillsFormSkillNameLabel: 'Skill Name',
    skillsFormSkillNamePlaceholder: 'e.g. Programming',
    skillsFormAddButton: 'Add Skill',
    skillsFormEmptyMessage: 'No skills added yet',
    skillsFormDelete: 'Delete',
    skillsFormSkillNameRequired: 'Please enter a skill name',
    skillsFormDuplicateMessage: 'This skill has already been added',

    // Skills preview
    skillsPreviewTitle: 'Professional Skills',

    // Education form
    educationFormTitle: 'Education',
    educationFormItemTitlePrefix: 'Education Record',
    educationFormDelete: 'Delete',
    educationFormFieldOfStudyLabel: 'Field of Study',
    educationFormFieldOfStudyRequired: 'Please enter a field of study',
    educationFormFieldOfStudyPlaceholder: 'e.g. Computer Engineering',
    educationFormUniversityNameLabel: 'University Name',
    educationFormUniversityNameRequired: 'Please enter a university name',
    educationFormUniversityNamePlaceholder: 'e.g. University of Tehran',
    educationFormAcademicYearLabel: 'Academic Year',
    educationFormAcademicYearRequired: 'Please enter an academic year',
    educationFormAcademicYearPlaceholder: 'e.g. 2021-2025',
    educationFormAddButton: 'Add Education Record',

    // Education preview
    educationPreviewTitle: 'Education',
    educationPreviewFallbackField: 'Field Name',
    educationPreviewLabelUniversity: 'University:',
    educationPreviewLabelAcademicYear: 'Academic Year:',

    // Language switcher
    languageSwitcherLabel: 'Resume Language:',
    languageSwitcherOptionFa: 'Persian Resume',
    languageSwitcherOptionEn: 'English Resume',

    // CV Preview
    previewTitle: 'Resume Preview',
    previewFullscreenButton: 'Fullscreen',
    previewPrintButton: 'Print',
    previewExitFullscreenButton: 'Exit Fullscreen',

    themeDrawerTitle: 'Resume theme & colors',
    themePageBackground: 'Page background',
    themeTextColor: 'Text color',
    themeHeadingColor: 'Heading color',
    themeAccentColor: 'Accent color',
    themeBorderColor: 'Border color',
    themeReset: 'Reset to default',
  },
}

const useTranslations = () => {
  const { language } = useLanguage()
  return TRANSLATIONS[language]
}

export default useTranslations

