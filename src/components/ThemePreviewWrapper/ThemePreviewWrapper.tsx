import { ReactNode } from 'react'
import { useTheme } from '../../contexts'

interface ThemePreviewWrapperProps {
  children: ReactNode
  className?: string
}

const ThemePreviewWrapper = ({ children, className = '' }: ThemePreviewWrapperProps) => {
  const { theme } = useTheme()

  return (
    <div
      className={`cv-themed ${className}`.trim()}
      style={{
        backgroundColor: theme.pageBackground,
        color: theme.textColor,
        ['--cv-heading' as string]: theme.headingColor,
        ['--cv-accent' as string]: theme.accentColor,
        ['--cv-border' as string]: theme.borderColor,
      }}
    >
      {children}
    </div>
  )
}

export default ThemePreviewWrapper
