import * as React from 'react'
import { Global, css } from '@emotion/react'
import styled from '@emotion/styled'

const timeOfDay = () => {
  const hour = new Date().getHours()

  if (hour >= 5 && hour < 12) {
    return 'morning'
  } else if (hour >= 12 && hour < 17) {
    return 'afternoon'
  } else if ((hour >= 17 && hour <= 23) || hour < 5) {
    return 'evening'
  }
}

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

const Greeting = styled.div`
  display: grid;
  place-content: center;
  height: 100%;
  gap: 1ch;
  font-size: 3em;
`

const App = (): JSX.Element => (
  <>
    <Global styles={GlobalStyle} />
    <Greeting>Good {timeOfDay()}, Amit</Greeting>
  </>
)

export default App
