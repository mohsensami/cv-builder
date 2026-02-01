import { useState } from 'react'
import { ConfigProvider } from 'antd'
import faIR from 'antd/locale/fa_IR'
import CVForm from './components/CVForm/CVForm'
import CVPreview from './components/CVPreview/CVPreview'
import { CVData } from './types/cv.types'

function App() {
  const [cvData, setCvData] = useState<CVData>({
    firstName: '',
    lastName: '',
  })

  const updateCVData = (field: keyof CVData, value: string) => {
    setCvData((prev) => ({
      ...prev,
      [field]: value,
    }))
  }

  return (
    <ConfigProvider locale={faIR} direction="rtl">
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
            سازنده رزومه
          </h1>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6">
              <CVForm cvData={cvData} onUpdate={updateCVData} />
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <CVPreview cvData={cvData} />
            </div>
          </div>
        </div>
      </div>
    </ConfigProvider>
  )
}

export default App
