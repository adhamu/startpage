import * as React from 'react'
import { Global, ThemeProvider } from '@emotion/react'
import styled from '@emotion/styled'

import { getDate, timeOfDay } from '@global/date'
import Time from '@components/Time'
import Search from '@components/Search'
import Bookmarks from '@components/Bookmarks'
import DarkModeToggle from '@components/DarkModeToggle'
import useTheme from '@hooks/useTheme'
import useSettings from '@hooks/useSettings'

const Main = styled.div`
  max-width: 850px;
  margin: 8em auto;
  padding: 0 1em;
`

const Date = styled.h4`
  color: ${props => props.theme.colors.heading};
  margin-bottom: 1em;
  padding-bottom: 1em;
  border-bottom: 1px solid ${props => props.theme.colors.border};
`

const Greeting = styled.div`
  font-size: 3em;
  margin-bottom: 1em;
  line-height: 1em;
`

const App = (): JSX.Element => {
  const { isDarkMode, toggleDarkMode, theme } = useTheme()
  const {
    settings: { name },
  } = useSettings()

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
      <DarkModeToggle isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      <Time />
      <Main>
        <Date>{getDate()}</Date>
        <Greeting>
          Good {timeOfDay()}
          {name && `, ${name}`}
        </Greeting>
        <Search />
        <Bookmarks />
      </Main>
    </ThemeProvider>
  )
}

export default App
