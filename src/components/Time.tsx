import * as React from 'react'
import styled from '@emotion/styled'
import { format } from 'date-fns'

const Time = styled.div`
  position: absolute;
  right: 1em;
  top: 1em;
  font-weight: 700;
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
