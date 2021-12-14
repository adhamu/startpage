import * as React from 'react'

import styled from '@emotion/styled'

import { SettingsContext } from '../context/SettingsProvider'
import { timeOfDay } from '../date'

const Style = styled.h1`
  margin-bottom: 1em;
  line-height: 1em;
`

const Greeting = (): JSX.Element => {
  const {
    settings: { name },
  } = React.useContext(SettingsContext)

  return (
    <Style>
      Good {timeOfDay()}
      {name && `, ${name}`}
    </Style>
  )
}

export default Greeting
