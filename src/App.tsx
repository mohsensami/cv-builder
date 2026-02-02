import { ConfigProvider } from 'antd'
import faIR from 'antd/locale/fa_IR'
import { Panel, PanelGroup, PanelResizeHandle } from 'react-resizable-panels'
import { CVProvider } from './contexts'
import CVForm from './components/CVForm/CVForm'
import CVPreview from './components/CVPreview/CVPreview'

function App() {
  return (
    <ConfigProvider locale={faIR} direction="rtl">
      <CVProvider>
        <div className="min-h-screen bg-gray-50">
          <div className="mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
              سازنده رزومه
            </h1>
            <div className="bg-white rounded-lg shadow-md overflow-hidden" style={{ height: 'calc(100vh - 200px)' }}>
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
      </CVProvider>
    </ConfigProvider>
  )
}

export default App
