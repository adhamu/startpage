import * as React from 'react'
import styled from '@emotion/styled'

const Switch = styled.label<{ checked: boolean }>`
  display: inline-block;
  font-size: 16px;
  width: 2.8em;
  height: 1.25em;
  border-radius: 1em;
  position: relative;
  padding: 2px;
  cursor: pointer;
  background: ${props =>
    props.checked ? '#55efc4' : props.theme.colors.body};

  input {
    position: absolute;
    opacity: 0;

    &:checked + div {
      -webkit-transform: translate3d(1.45em, 0, 0);
      -moz-transform: translate3d(1.45em, 0, 0);
      transform: translate3d(1.45em, 0, 0);
    }
  }

  div {
    top: 1px;
    left: 2px;
    height: 1.1em;
    width: 1.1em;
    border-radius: 1em;
    background: ${props => props.theme.colors.background};
    -webkit-transition: all 300ms;
    -moz-transition: all 300ms;
    transition: all 300ms;
    z-index: 1;
    position: relative;
  }
`

type Props = {
  checked?: boolean
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  className?: string
  children?: React.ReactNode
}

export default ({
  checked,
  onChange,
  className,
  children,
}: Props): JSX.Element => (
  <Switch className={className} checked={checked}>
    {children}
    <input type="checkbox" checked={checked} onChange={onChange} />
    <div></div>
  </Switch>
)
