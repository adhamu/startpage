import { useEffect, useState } from 'react'

import styled from '@emotion/styled'
import { format } from 'date-fns'

import { getDate } from '../date'

const Style = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 1em;
  border-bottom: 1px solid ${props => props.theme.colors.border};
  margin-bottom: 1em;
  color: ${props => props.theme.colors.highlight};
  font-weight: 600;
`

const DateTime = () => {
  const [time, setTime] = useState(new Date())

  useEffect(() => {
    const timer = setTimeout(() => {
      setTime(new Date())
    }, 1000)

    return () => clearTimeout(timer)
  })

  return (
    <Style>
      <div>{getDate()}</div>
      <div>{format(time, 'HH:mm')}</div>
    </Style>
  )
}

export default DateTime
