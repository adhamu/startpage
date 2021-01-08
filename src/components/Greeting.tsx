import * as React from 'react'
import styled from '@emotion/styled'
import { timeOfDay } from '@global/date'
import useSettings from '@global/hooks/useSettings'

const Greeting = styled.div`
  font-size: 3em;
  margin-bottom: 1em;
  line-height: 1em;
`

export default (): JSX.Element => {
  const {
    settings: { name },
  } = useSettings()

  return (
    <Greeting>
      Good {timeOfDay()}
      {name && `, ${name}`}
    </Greeting>
  )
}
