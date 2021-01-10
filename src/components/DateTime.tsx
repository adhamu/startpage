import * as React from 'react'
import styled from '@emotion/styled'
import { format } from 'date-fns'

import { getDate } from '@global/date'

const DateTime = styled.div`
  display: flex;
  justify-content: space-between;
  font-weight: 600;
  color: ${props => props.theme.colors.highlight};
  margin-bottom: 1em;
  padding-bottom: 1em;
  border-bottom: 1px solid ${props => props.theme.colors.border};
`

export default (): JSX.Element => {
  const [time, setTime] = React.useState(new Date())

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setTime(new Date())
    }, 1000)

    return () => clearTimeout(timer)
  })

  return (
    <DateTime>
      <div>{getDate()}</div>
      <div>{format(time, 'HH:mm')}</div>
    </DateTime>
  )
}
