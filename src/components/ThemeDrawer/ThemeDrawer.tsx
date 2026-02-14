import { useState } from 'react'
import { Drawer, ColorPicker, Button, Space, Form } from 'antd'
import { BgColorsOutlined } from '@ant-design/icons'
import type { Color } from 'antd/es/color-picker'
import { useTheme } from '../../contexts'
import useTranslations from '../../hooks/useTranslations'
import { CVTheme } from '../../types/theme.types'

const ThemeDrawer = () => {
  const t = useTranslations()
  const { theme, setTheme, resetTheme } = useTheme()
  const [open, setOpen] = useState(false)

  const updateTheme = (key: keyof CVTheme, hex: string) => {
    setTheme((prev) => ({ ...prev, [key]: hex }))
  }

  const handleColorChange = (key: keyof CVTheme) => (color: Color) => {
    if (color) {
      updateTheme(key, color.toHexString())
    }
  }

  const handleReset = () => {
    resetTheme()
  }

  return (
    <>
      <Button
        type="default"
        icon={<BgColorsOutlined />}
        onClick={() => setOpen(true)}
        title={t.themeDrawerTitle}
        className="fixed top-24 z-50 end-4 md:end-6 shadow-md"
      >
        {t.themeDrawerTitle}
      </Button>
      <Drawer
        title={t.themeDrawerTitle}
        placement="right"
        open={open}
        onClose={() => setOpen(false)}
        width={320}
        getContainer={false}
        styles={{ body: { paddingBottom: 24 } }}
      >
        <Form layout="vertical" className="space-y-6">
          <Form.Item label={t.themePageBackground}>
            <ColorPicker
              value={theme.pageBackground}
              onChange={handleColorChange('pageBackground')}
              format="hex"
              showText
            />
          </Form.Item>
          <Form.Item label={t.themeTextColor}>
            <ColorPicker
              value={theme.textColor}
              onChange={handleColorChange('textColor')}
              format="hex"
              showText
            />
          </Form.Item>
          <Form.Item label={t.themeHeadingColor}>
            <ColorPicker
              value={theme.headingColor}
              onChange={handleColorChange('headingColor')}
              format="hex"
              showText
            />
          </Form.Item>
          <Form.Item label={t.themeAccentColor}>
            <ColorPicker
              value={theme.accentColor}
              onChange={handleColorChange('accentColor')}
              format="hex"
              showText
            />
          </Form.Item>
          <Form.Item label={t.themeBorderColor}>
            <ColorPicker
              value={theme.borderColor}
              onChange={handleColorChange('borderColor')}
              format="hex"
              showText
            />
          </Form.Item>
          <Space className="w-full justify-end">
            <Button onClick={handleReset}>{t.themeReset}</Button>
          </Space>
        </Form>
      </Drawer>
    </>
  )
}

export default ThemeDrawer
