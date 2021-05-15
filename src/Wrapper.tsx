import * as React from 'react'
import { Global, ThemeProvider } from '@emotion/react'

import useTheme from './hooks/useTheme'
import { SettingsContext } from './context/SettingsProvider'
import DarkModeToggle from './components/DarkModeToggle'
import { globalStyles } from './theme'

const matchMediaFallback = (): boolean =>
  window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches

const Wrapper = ({ children }: { children: React.ReactNode }): JSX.Element => {
  const {
    settings: { prefersDarkMode = matchMediaFallback() },
    setSetting,
  } = React.useContext(SettingsContext)

  const theme = useTheme()

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
