import * as React from 'react'
import { Global, css } from '@emotion/react'
import styled from '@emotion/styled'
import { getDate, timeOfDay } from './date'
import Time from './components/Time'
import Search from './components/Search'

const GlobalStyle = css`
  * {
    padding: 0;
    margin: 0;
  }
  body {
    font-family: 'Open Sans', cursive;
    font-size: 16px;
    line-height: 28px;
  }
`

const Container = styled.div`
  display: grid;
  place-content: center;
  height: 100%;
  gap: 1ch;
  text-align: center;
`

const Date = styled.span`
  margin-bottom: 1em;
  padding-bottom: 1em;
  border-bottom: 1px solid #efefef;
`

const Greeting = styled.div`
  font-size: 3em;
  margin-bottom: 1em;
`

const App = (): JSX.Element => (
  <>
    <Global styles={GlobalStyle} />
    <Time />
    <Container>
      <Date>{getDate()}</Date>
      <Greeting>Good {timeOfDay()}, Amit</Greeting>
      <Search />
    </Container>
  </>
)

export default App
