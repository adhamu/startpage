import * as React from 'react'
import styled from '@emotion/styled'
import { timeOfDay } from '@global/date'
import useStorage from '@global/hooks/useStorage'

const Greeting = styled.div`
  font-size: 3em;
  margin-bottom: 1em;
  line-height: 1em;
`

export default (): JSX.Element => {
  const [name] = useStorage('name')

  return (
    <Greeting>
      Good {timeOfDay()}
      {name && `, ${name}`}
    </Greeting>
  )
}
