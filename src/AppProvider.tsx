import * as React from 'react'
import { Global, ThemeProvider } from '@emotion/react'

import useTheme from '@hooks/useTheme'
import useSettings from '@hooks/useSettings'
import DarkModeToggle from '@components/DarkModeToggle'

type Props = {
  children: React.ReactElement
}

const matchMediaFallback = (): boolean =>
  window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches

const AppProvider = ({ children }: Props): JSX.Element => {
  const {
    setSetting,
    settings: { prefersDarkMode = matchMediaFallback() },
  } = useSettings()

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

export default AppProvider
