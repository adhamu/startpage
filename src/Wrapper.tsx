import * as React from 'react'
import { Global, ThemeProvider } from '@emotion/react'

import useTheme from '@hooks/useTheme'
import { SettingsContext } from './context/SettingsProvider'
import DarkModeToggle from './components/DarkModeToggle'

const matchMediaFallback = (): boolean =>
  window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches

const Wrapper = ({
  children,
}: {
  children: React.ReactNode[]
}): JSX.Element => {
  const {
    settings: { prefersDarkMode = matchMediaFallback() },
    setSetting,
  } = React.useContext(SettingsContext)
  const { theme } = useTheme(prefersDarkMode)

  return (
    <ThemeProvider theme={theme}>
      <Global
        styles={{
          '*': {
            padding: 0,
            margin: 0,
            outline: 0,
          },
          body: {
            fontFamily: 'Source Sans Pro, sans-serif',
            fontWeight: 400,
            fontSize: '16px',
            lineHeight: '28px',
            background: theme.colors.background,
            color: theme.colors.body,
          },
        }}
      />
      <DarkModeToggle
        isDarkMode={prefersDarkMode}
        toggleDarkMode={() => setSetting('prefersDarkMode', !prefersDarkMode)}
      />
      {children}
    </ThemeProvider>
  )
}

export default Wrapper
