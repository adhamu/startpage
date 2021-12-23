import * as React from 'react'

import styled from '@emotion/styled'

const Style = styled.label<{ checked: boolean }>`
  position: relative;
  display: inline-block;
  width: 2.8em;
  height: 1.25em;
  padding: 2px;
  background: ${props => (props.checked ? '#55efc4' : props.theme.colors.body)};
  border-radius: 1em;
  cursor: pointer;
  font-size: 1rem;

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
    position: relative;
    z-index: 1;
    top: 1px;
    left: 2px;
    width: 1.1em;
    height: 1.1em;
    background: ${props => props.theme.colors.background};
    border-radius: 1em;
    -webkit-transition: all 300ms;
    -moz-transition: all 300ms;
    transition: all 300ms;
  }
`

type Props = {
  checked?: boolean
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  className?: string
  children?: React.ReactNode
}

const Switch = ({
  checked,
  onChange,
  className,
  children,
}: Props): JSX.Element => (
  <Style className={className} checked={!!checked}>
    {children}
    <input type="checkbox" checked={checked} onChange={onChange} />
    <div></div>
  </Style>
)

export default Switch
