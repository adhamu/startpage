import * as React from 'react'
import { Global, ThemeProvider } from '@emotion/react'

import useTheme from '@hooks/useTheme'
import { SettingsContext } from '@context/SettingsProvider'
import DarkModeToggle from '@components/DarkModeToggle'
import { globalStyles } from './theme'

const matchMediaFallback = (): boolean =>
  window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches

const Wrapper = ({ children }: { children: React.ReactNode }): JSX.Element => {
  const {
    settings: { prefersDarkMode },
    setSetting,
  } = React.useContext(SettingsContext)

  if (prefersDarkMode === undefined) {
    setSetting('prefersDarkMode', matchMediaFallback())
  }

  const { theme } = useTheme(prefersDarkMode)

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
