import * as React from 'react'
import styled from '@emotion/styled'

import { timeOfDay } from '../date'
import { SettingsContext } from '../context/SettingsProvider'

const Greeting = styled.h1`
  margin-bottom: 1em;
  line-height: 1em;
`

export default (): JSX.Element => {
  const {
    settings: { name },
  } = React.useContext(SettingsContext)

  return (
    <Greeting>
      Good {timeOfDay()}
      {name && `, ${name}`}
    </Greeting>
  )
}
