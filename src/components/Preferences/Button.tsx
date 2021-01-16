import * as React from 'react'
import styled from '@emotion/styled'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'
import { SettingsContext } from '@global/context/SettingsProvider'

const Button = styled.button<{ isDisabled?: boolean }>`
  cursor: pointer;
  background: none;
  border: none;
  text-transform: uppercase;
  font-weight: 700;
  width: 100px;
  background: ${props => props.theme.colors.highlight};
  color: ${props => props.theme.colors.background};
  padding: 10px 10px;
  font-size: 12px;
  text-align: center;

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
    cursor: not-allowed;
    background: ${props => props.theme.colors.background};
    border: 1px solid ${props => props.theme.colors.border};
    color: ${props => props.theme.colors.border};
  }

  &:hover {
    opacity: 0.6;
  }
`

type Props = {
  onClick?: () => void
  disabled?: boolean
  className?: 'warning' | 'danger' | 'success'
  children: string
}

export default ({
  onClick,
  disabled,
  className,
  children,
}: Props): JSX.Element => {
  const [clicked, setClicked] = React.useState(false)
  const { settings } = React.useContext(SettingsContext)

  React.useEffect(() => {
    setClicked(false)
  }, [settings])

  return (
    <Button
      onClick={() => {
        setClicked(true)
        onClick()
      }}
      disabled={disabled}
      className={className}>
      {clicked ? <FontAwesomeIcon icon={faSpinner} spin /> : children}
    </Button>
  )
}
