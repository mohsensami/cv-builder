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
  },
}

const useTranslations = () => {
  const { language } = useLanguage()
  return TRANSLATIONS[language]
}

export default useTranslations

