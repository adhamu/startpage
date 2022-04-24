import styled from '@emotion/styled'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Style = styled.button<{ menuOpen: boolean }>`
  position: absolute;
  top: 2em;
  right: 2em;
  border: none;
  background: transparent;
  color: ${props => props.theme.colors.highlight};
  cursor: pointer;
  transition: 0.15s;

  &:hover {
    opacity: 0.9;
  }

  ${props => (props.menuOpen ? 'transform: rotate(-90deg);' : '')}
`

const Menu = ({
  menuOpen,
  onClick,
}: {
  menuOpen: boolean
  onClick: () => void
}): JSX.Element => (
  <Style menuOpen={menuOpen} onClick={onClick}>
    <FontAwesomeIcon icon={faBars} size="2x" />
  </Style>
)

export default Menu
