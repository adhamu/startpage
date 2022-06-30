import * as React from 'react'

import styled from '@emotion/styled'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { SettingsContext } from '../../context/SettingsProvider'

const Style = styled.button<{ isDisabled?: boolean }>`
  min-width: 100px;
  padding: 10px 10px;
  border: none;
  background: none;
  background: ${props => props.theme.colors.highlight};
  color: ${props => props.theme.colors.background};
  cursor: pointer;
  font-size: 0.75rem;
  font-weight: 700;
  text-align: center;
  text-transform: uppercase;

  &.warning {
    background: #fdcb6e;
    color: ${props => props.theme.colors.background};
  }

  &.danger {
    background: #ff7675;
    color: ${props => props.theme.colors.background};
  }

  &.success {
    background: #55efc4;
    color: ${props => props.theme.colors.background};
  }

  &[disabled] {
    border: 1px solid ${props => props.theme.colors.border};
    background: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.border};
    cursor: not-allowed;
  }

  &:hover {
    opacity: 0.6;
  }
`

type Props = {
  onClick?: (e: React.MouseEvent) => void
  disabled?: boolean
  className?: 'warning' | 'danger' | 'success'
  children: string
  setClick?: boolean
}

const Button = ({
  onClick,
  disabled,
  className,
  children,
  setClick = true,
}: Props): JSX.Element => {
  const [clicked, setClicked] = React.useState(false)
  const { settings } = React.useContext(SettingsContext)

  React.useEffect(() => {
    setClicked(false)
  }, [settings])

  return (
    <Style
      onClick={e => {
        if (setClick) {
          setClicked(true)
        }

        return onClick ? onClick(e) : false
      }}
      disabled={disabled}
      className={className}
    >
      {clicked ? <FontAwesomeIcon icon={faSpinner} spin /> : children}
    </Style>
  )
}

export default Button
