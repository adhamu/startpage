import * as React from 'react'
import styled from '@emotion/styled'
import { timeOfDay } from '@global/date'
import useStorage from '@global/hooks/useStorage'

const Greeting = styled.div`
  font-size: 3em;
  margin-bottom: 1em;
  line-height: 1em;
`

const Input = styled.input`
  background-color: transparent;
  border: none;
  color: ${props => props.theme.colors.body};
  font-size: 1em;
`

export default (): JSX.Element => {
  const [name, setName] = useStorage('name', '')

  return (
    <Greeting>
      Good {timeOfDay()}
      <Input
        type="text"
        defaultValue={name}
        onChange={e => setName(e.target.value)}
      />
    </Greeting>
  )
}
