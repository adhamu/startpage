import * as React from 'react'
import { Global, ThemeProvider } from '@emotion/react'

import useTheme from '@hooks/useTheme'
import AppProvider2 from './hooks/useSettings'

type Props = {
  children: (value: UseSettings) => React.ReactNode
}

const AppProvider = ({ children }: Props): JSX.Element => {
  const { theme } = useTheme(false)

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
      <AppProvider2>{children}</AppProvider2>
    </ThemeProvider>
  )
}

export default AppProvider
