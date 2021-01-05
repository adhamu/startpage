import * as React from 'react'
import { Global, css, ThemeProvider } from '@emotion/react'
import styled from '@emotion/styled'

import { getDate, timeOfDay } from '@global/date'
import Time from '@components/Time'
import Search from '@components/Search'
import Bookmarks from '@components/Bookmarks'
import DarkModeToggle from '@components/DarkModeToggle'
import useTheme from '@hooks/useTheme'

const GlobalStyle = css`
  * {
    padding: 0;
    margin: 0;
    outline: 0;
  }
  body {
    font-family: 'Source Sans Pro', sans-serif;
    font-weight: 400;
    font-size: 16px;
    line-height: 28px;
  }
`

const Body = styled.div`
  background: ${props => props.theme.colors.background};
  color: ${props => props.theme.colors.body};
  border-color: red;
`

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

  return (
    <ThemeProvider theme={theme}>
      <Body>
        <Global styles={GlobalStyle} />
        <DarkModeToggle
          isDarkMode={isDarkMode}
          toggleDarkMode={toggleDarkMode}
        />
        <Time />
        <Main>
          <Date>{getDate()}</Date>
          <Greeting>Good {timeOfDay()}, Amit</Greeting>
          <Search />
          <Bookmarks />
        </Main>
      </Body>
    </ThemeProvider>
  )
}

export default App
