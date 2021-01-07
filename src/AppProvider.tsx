import * as React from 'react'
import { Global, ThemeProvider } from '@emotion/react'

import useTheme from '@hooks/useTheme'

type Props = {
  prefersDarkMode: boolean
  children: React.ReactElement[]
}
const AppProvider = ({ prefersDarkMode, children }: Props): JSX.Element => {
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
      {children}
    </ThemeProvider>
  )
}

export default AppProvider
