# CV Builder — سازنده رزومه

یک اپلیکیشن وب برای ساخت و ویرایش رزومه با پیش‌نمایش زنده، تم‌های قابل تنظیم و پشتیبانی دوزبانه (فارسی/انگلیسی).

A React + TypeScript + Vite web app for building and editing resumes with live preview, customizable themes, and bilingual UI (Persian/English).

---

## ویژگی‌ها | Features

### فارسی

- **پیش‌نمایش زنده** — تغییرات بلافاصله در پنل پیش‌نمایش نمایش داده می‌شوند.
- **پنل‌های قابل تغییر اندازه** — با کشیدن جداکننده، نسبت فرم و پیش‌نمایش را تنظیم کنید.
- **تنظیم تم (رنگ‌ها)** — پس‌زمینه، رنگ متن، عنوان، رنگ تاکید و حاشیه از طریق کشوی تم.
- **پیش‌نمایش تمام‌صفحه** — دکمه برای باز کردن پیش‌نمایش در حالت تمام‌صفحه.
- **رابط دوزبانه** — سوئیچ زبان برای نمایش رابط به فارسی یا انگلیسی.
- **ذخیره محلی** — داده رزومه و تم در مرورگر ذخیره می‌شوند.
- **بخش‌های رزومه:** اطلاعات شخصی، درباره من، سوابق کاری، تحصیلات، مهارت‌ها، زبان‌ها.

### English

- **Live preview** — Changes appear instantly in the preview panel.
- **Resizable panels** — Drag the divider to adjust form vs. preview width.
- **Theme customization** — Page background, text, heading, accent, and border colors via theme drawer.
- **Fullscreen preview** — Button to open the CV preview in fullscreen.
- **Bilingual UI** — Language switcher for Persian or English interface.
- **Local persistence** — CV data and theme are saved in the browser.
- **CV sections:** Personal info, about me, work experience, education, skills, languages.

---

## فناوری‌ها | Tech Stack

| فارسی        | English     |
|-------------|-------------|
| React 18    | React 18    |
| TypeScript  | TypeScript  |
| Vite 5      | Vite 5      |
| Tailwind CSS| Tailwind CSS|
| Ant Design 5| Ant Design 5|
| react-resizable-panels | Resizable split panels |

---

## نصب و اجرا | Install & Run

```bash
# نصب وابستگی‌ها | Install dependencies
npm install

# اجرای سرور توسعه | Start dev server
npm run dev

# ساخت نسخه production | Build for production
npm run build

# پیش‌نمایش نسخه build شده | Preview production build
npm run preview
```

پس از `npm run dev` در مرورگر به آدرس نمایش‌داده‌شده (معمولاً `http://localhost:5173`) بروید.  
After `npm run dev`, open the URL shown in the terminal (usually `http://localhost:5173`) in your browser.

---

## ساختار پروژه | Project Structure

```
src/
├── components/              # کامپوننت‌ها | Components
│   ├── CVForm/             # فرم اصلی ورود اطلاعات رزومه | Main CV input form
│   ├── CVPreview/          # پیش‌نمایش رزومه | Resume preview
│   ├── CVPreviewContent/   # محتوای داخل پیش‌نمایش | Preview content layout
│   ├── ThemeDrawer/        # کشوی تنظیم رنگ تم | Theme color drawer
│   ├── ThemePreviewWrapper/# wrapper پیش‌نمایش با تم | Preview wrapper with theme
│   ├── FullscreenPreview/  # پیش‌نمایش تمام‌صفحه | Fullscreen preview
│   ├── LanguageSwitcher/   # تعویض زبان | Language switcher
│   ├── FormField/          # فیلد فرم قابل استفاده مجدد | Reusable form field
│   ├── WorkExperienceForm/ │ WorkExperiencePreview/  # سوابق کاری
│   ├── EducationForm/      │ EducationPreview/      # تحصیلات
│   ├── SkillsForm/         │ SkillsPreview/         # مهارت‌ها
│   └── LanguagesForm/      │ LanguagesPreview/     # زبان‌ها
├── contexts/                # Contextهای React | React contexts
│   ├── CVContext.tsx       # داده و state رزومه | CV data & state
│   ├── ThemeContext.tsx    # تم و رنگ‌ها | Theme & colors
│   └── LanguageContext.tsx # زبان رابط | UI language
├── hooks/                   # هوک‌های سفارشی | Custom hooks
│   ├── useTranslations.ts  # متن‌های ترجمه‌شده | Translation strings
│   └── useLocalStorage.ts   # ذخیره/بازیابی از localStorage | Persist to localStorage
├── types/                   # تایپ‌های TypeScript | TypeScript types
│   ├── cv.types.ts         # رزومه، سوابق، تحصیلات، مهارت، زبان | CV, experience, education, skills, languages
│   └── theme.types.ts      # تم و رنگ‌ها | Theme & colors
├── App.tsx                  # کامپوننت اصلی | Main app component
├── main.tsx                 # نقطه ورود | Entry point
└── index.css                # استایل‌های سراسری و Tailwind | Global & Tailwind styles
```

---

## اسکریپت‌های NPM | NPM Scripts

| Command | توضیح | Description |
|---------|--------|-------------|
| `npm run dev` | اجرای سرور توسعه با HMR | Start dev server with HMR |
| `npm run build` | ساخت برای production (TypeScript + Vite) | Build for production (tsc + vite build) |
| `npm run preview` | سرو کردن فایل‌های build شده | Serve production build locally |
| `npm run lint` | اجرای ESLint | Run ESLint |

---

## داده رزومه | CV Data Model

رزومه شامل این فیلدهاست:  
The resume includes:

- **اطلاعات شخصی | Personal:** نام کامل، تلفن، ایمیل  
- **درباره من | About me:** متن معرفی  
- **سوابق کاری | Work experience:** عنوان، تاریخ (شمسی)، سمت  
- **تحصیلات | Education:** رشته، نام دانشگاه، سال تحصیلی  
- **مهارت‌ها | Skills:** لیست متن  
- **زبان‌ها | Languages:** نام زبان و سطح (مبتدی / متوسط / پیشرفته)

تم (رنگ پس‌زمینه، متن، عنوان، تاکید، حاشیه) جداگانه ذخیره می‌شود.  
Theme (background, text, heading, accent, border colors) is stored separately.

---

## لایسنس | License

Private project.  
پروژه خصوصی.
