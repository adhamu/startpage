import { useContext } from 'react'

import styled from '@emotion/styled'

import { SettingsContext } from '../context/SettingsProvider'
import { timeOfDay } from '../date'

const Style = styled.h1`
  margin-bottom: 1em;
  line-height: 1em;
`

const Greeting = () => {
  const {
    settings: { name },
  } = useContext(SettingsContext)

  return (
    <Style>
      Good {timeOfDay()}
      {!!name && `, ${name}`}
    </Style>
  )
}

export default Greeting
