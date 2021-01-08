import * as React from 'react'
import styled from '@emotion/styled'
import { timeOfDay } from '@global/date'
import { AppContext } from '@global/hooks/useSettings'

const Greeting = styled.div`
  font-size: 3em;
  margin-bottom: 1em;
  line-height: 1em;
`

export default (): JSX.Element => {
  const {
    settings: { name },
  } = React.useContext(AppContext)

  return (
    <Greeting>
      Good {timeOfDay()}
      {name && `, ${name}`}
    </Greeting>
  )
}
