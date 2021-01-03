import * as React from 'react'
import { Global, css } from '@emotion/react'
import styled from '@emotion/styled'
import { getDate, timeOfDay } from './date'
import Time from './components/Time'
import Search from './components/Search'
import Bookmarks from './components/Bookmarks'

const GlobalStyle = css`
  * {
    padding: 0;
    margin: 0;
    outline: 0;
  }
  body {
    font-family: 'Open Sans', cursive;
    font-size: 16px;
    line-height: 28px;
  }
`

const Main = styled.main`
  max-width: 850px;
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
  margin-bottom: 1em;
  padding-bottom: 1em;
  border-bottom: 1px solid #efefef;
`

const Greeting = styled.div`
  font-size: 3em;
  margin-bottom: 1em;
  line-height: 1em;
`

const App = (): JSX.Element => (
  <>
    <Global styles={GlobalStyle} />
    <Time />
    <Main>
      <Container>
        <Date>{getDate()}</Date>
        <Greeting>Good {timeOfDay()}, Amit</Greeting>
        <Search />
        <Bookmarks />
      </Container>
    </Main>
  </>
)

export default App
