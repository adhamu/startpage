import { useContext } from 'react'

import { Global, ThemeProvider } from '@emotion/react'

import DarkModeToggle from './components/DarkModeToggle'
import { SettingsContext } from './context/SettingsProvider'
import { useTheme } from './hooks/useTheme'
import { globalStyles } from './theme'

import type { ReactNode } from 'react'

const Wrapper = ({ children }: { children: ReactNode }) => {
  const {
    settings: { prefersDarkMode },
    setSetting,
  } = useContext(SettingsContext)

  const theme = useTheme()

  if (!theme) {
    return null
  }

  return (
    <ThemeProvider theme={theme}>
      <Global styles={globalStyles(theme)} />
      <DarkModeToggle
        isDarkMode={prefersDarkMode}
        toggleDarkMode={() => setSetting('prefersDarkMode', !prefersDarkMode)}
      />
      {children}
    </ThemeProvider>
  )
}

export default Wrapper
