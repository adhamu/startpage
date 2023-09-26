import styled from '@emotion/styled'
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Switch from './Switch'

const Style = styled.div`
  position: absolute;
  top: 1em;
  left: 1em;

  svg {
    position: absolute;
    z-index: 0;
    top: 5px;
    color: ${props => props.theme.colors.background};
    font-size: 0.875rem;

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
  isDarkMode?: boolean
  toggleDarkMode: () => void
}

const DarkModeToggle = ({ isDarkMode, toggleDarkMode }: Props) => (
  <Style>
    <ToggleArea checked={!!isDarkMode} onChange={toggleDarkMode}>
      <FontAwesomeIcon className="dark" icon={faMoon} fixedWidth />
      <FontAwesomeIcon className="light" icon={faSun} fixedWidth />
    </ToggleArea>
  </Style>
)

export default DarkModeToggle
