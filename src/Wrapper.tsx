import * as React from 'react'
import { Global, ThemeProvider } from '@emotion/react'

import useTheme from '@hooks/useTheme'
import { SettingsContext } from '@global/context/SettingsProvider'
import DarkModeToggle from '@components/DarkModeToggle'

const matchMediaFallback = (): boolean =>
  window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches

const Wrapper = ({ children }: { children: React.ReactNode }): JSX.Element => {
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
          'h1, h2, h3, h4, h5': {
            marginBottom: '1em',
          },
          hr: {
            borderColor: theme.colors.border,
          },
          label: {
            display: 'block',
            fontWeight: 700,
          },
          'input, select': {
            width: '100%',
            background: 'transparent',
            color: theme.colors.body,
            border: `1px solid ${theme.colors.border}`,
            appearance: 'none',
            WebkitAppearance: 'none',
            boxShadow: 'none',
            padding: '10px 4px',
            fontSize: '18px',
            lineHeight: '28px',
            outline: 'none',
            borderRadius: 0,
          },
          'input[type="text"]': {
            width: 'calc(100% - 0.5em - 10px)',
            padding: '10px',
          },
          'input:focus, select:focus': {
            border: `1px solid ${theme.colors.highlight}`,
          },
          'a, a:visited': {
            color: theme.colors.body,
            textDecoration: 'none',
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
