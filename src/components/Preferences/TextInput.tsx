import * as React from 'react'

import styled from '@emotion/styled'

const Style = styled.input`
  padding: 4px 10px;
  font-size: 14px;
`

type Props = {
  defaultValue?: string
  placeholder?: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  value?: string
  onKeyDown?: (event: React.KeyboardEvent<HTMLInputElement>) => void
}

const TextInput = ({
  defaultValue,
  placeholder,
  onChange,
  value,
  onKeyDown,
}: Props): JSX.Element => (
  <Style
    type="text"
    defaultValue={defaultValue}
    placeholder={placeholder}
    onChange={onChange}
    value={value}
    onKeyDown={onKeyDown}
  />
)

export default TextInput
