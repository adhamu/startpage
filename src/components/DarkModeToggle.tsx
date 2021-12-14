import * as React from 'react'

import styled from '@emotion/styled'
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Switch from './Switch'

const Style = styled.div`
  position: absolute;
  left: 1em;
  top: 1em;

  svg {
    position: absolute;
    z-index: 0;
    top: 5px;
    font-size: 14px;
    color: ${props => props.theme.colors.background};

    &.dark {
      left: 3px;
    }

    &.light {
      right: 3px;
    }
  }
`

const ToggleArea = styled(Switch)`
  background: ${props => props.theme.colors.highlight};
`

type Props = {
  isDarkMode: boolean
  toggleDarkMode: () => void
}

const DarkModeToggle = ({ isDarkMode, toggleDarkMode }: Props): JSX.Element => (
  <Style>
    <ToggleArea checked={!!isDarkMode} onChange={toggleDarkMode}>
      <FontAwesomeIcon className="dark" icon={faMoon} fixedWidth={true} />
      <FontAwesomeIcon className="light" icon={faSun} fixedWidth={true} />
    </ToggleArea>
  </Style>
)

export default DarkModeToggle
