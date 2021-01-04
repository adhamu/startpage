import * as React from 'react'
import { Global, css } from '@emotion/react'
import styled from '@emotion/styled'
import { getDate, timeOfDay } from './date'
import Time from './components/Time'
import Search from './components/Search'
import Bookmarks from './components/Bookmarks'
import getTheme, { Theme } from './theme'
import useDarkMode from './hooks/useDarkMode'
import DarkModeToggle from './components/DarkModeToggle'

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

const Body = styled.div<{ theme: Theme }>`
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

const Date = styled.span<{ theme: Theme }>`
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
  const [theme, setTheme] = React.useState(getTheme(false))
  const { isDarkMode, toggleDarkMode } = useDarkMode()

  React.useEffect(() => {
    setTheme(getTheme(isDarkMode))
  }, [isDarkMode])

  return (
    <Body theme={theme}>
      <Global styles={GlobalStyle} />
      <DarkModeToggle
        theme={theme}
        isDarkMode={isDarkMode}
        toggleDarkMode={toggleDarkMode}
      />
      <Time theme={theme} />
      <Main>
        <Container>
          <Date theme={theme}>{getDate()}</Date>
          <Greeting>Good {timeOfDay()}, Amit</Greeting>
          <Search theme={theme} />
          <Bookmarks theme={theme} />
        </Container>
      </Main>
    </Body>
  )
}

export default App
