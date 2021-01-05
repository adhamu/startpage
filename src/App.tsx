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
  html {
    height: 100%;
  }
  main {
    height: 100%;
  }
  body {
    font-family: 'Source Sans Pro', sans-serif;
    font-weight: 400;
    font-size: 16px;
    line-height: 28px;
    height: 100%;
  }
`

const Body = styled.div`
  background: ${props => props.theme.colors.background};
  color: ${props => props.theme.colors.body};
  border-color: red;
  height: 100%;
`

const Main = styled.div`
  max-width: 850px;
  height: 100%;
  margin: 0 auto;
`

const Container = styled.div`
  display: grid;
  place-content: center;
  height: 100%;
  gap: 1ch;
  margin: 0 2em;
  grid-template-columns: repeat(1, 1fr);
`

const Date = styled.span`
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
          <Container>
            <Date>{getDate()}</Date>
            <Greeting>Good {timeOfDay()}, Amit</Greeting>
            <Search />
            <Bookmarks />
          </Container>
        </Main>
      </Body>
    </ThemeProvider>
  )
}

export default App
