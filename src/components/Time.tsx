import * as React from 'react'
import styled from '@emotion/styled'
import { format } from 'date-fns'
import { Theme } from '@global/theme'

const Time = styled.div<{ theme: Theme }>`
  position: absolute;
  right: 1em;
  top: 1em;
  font-weight: 600;
  color: ${props => props.theme.colors.heading};
`

export default ({ theme }: { theme: Theme }): JSX.Element => {
  const [time, setTime] = React.useState(new Date())

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setTime(new Date())
    }, 1000)

    return () => clearTimeout(timer)
  })

  return <Time theme={theme}>{format(time, 'HH:mm')}</Time>
}
