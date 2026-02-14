import { Panel, PanelGroup, PanelResizeHandle } from 'react-resizable-panels'
import { CVProvider, LanguageProvider, ThemeProvider } from './contexts'
import CVForm from './components/CVForm/CVForm'
import CVPreview from './components/CVPreview/CVPreview'
import LanguageSwitcher from './components/LanguageSwitcher'

function App() {
  return (
    <LanguageProvider>
      <CVProvider>
        <ThemeProvider>
        <div className="min-h-screen bg-gray-50">
          <div className="mx-auto px-4 py-8">
            <div className="flex flex-col gap-4 mb-8 md:flex-row md:items-center md:justify-between">
              <h1 className="text-3xl font-bold text-gray-800 text-center md:text-right">
                سازنده رزومه
              </h1>
              <LanguageSwitcher />
            </div>
            <div
              className="bg-white rounded-lg shadow-md overflow-hidden"
              style={{ height: 'calc(100vh - 200px)' }}
            >
              <PanelGroup direction="horizontal">
                <Panel defaultSize={50} minSize={30} maxSize={70}>
                  <div className="h-full p-6 overflow-auto">
                    <CVForm />
                  </div>
                </Panel>

                <PanelResizeHandle className="w-2 bg-gray-200 hover:bg-blue-400 transition-colors cursor-col-resize" />

                <Panel defaultSize={50} minSize={30} maxSize={70}>
                  <div className="h-full p-6 overflow-auto">
                    <CVPreview />
                  </div>
                </Panel>
              </PanelGroup>
            </div>
          </div>
        </div>
        </ThemeProvider>
      </CVProvider>
    </LanguageProvider>
  )
}

export default App
