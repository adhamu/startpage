import * as React from 'react'
import styled from '@emotion/styled'
import { format } from 'date-fns'

const Time = styled.div`
  float: right;
  font-weight: 700;
  padding: 1em;
`

export default (): JSX.Element => {
  const [time, setTime] = React.useState(new Date())

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setTime(new Date())
    }, 1000)

    return () => clearTimeout(timer)
  })

  return <Time>{format(time, 'HH:mm')}</Time>
}
