import type { ChangeEvent, KeyboardEvent } from 'react'

import styled from '@emotion/styled'

const Style = styled.input`
  padding: 4px 10px;
  font-size: 0.875rem;
`

type Props = {
  defaultValue?: string
  placeholder?: string
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void
  value?: string
  onKeyDown?: (event: KeyboardEvent<HTMLInputElement>) => void
}

const TextInput = ({
  defaultValue,
  placeholder,
  onChange,
  value,
  onKeyDown,
}: Props) => (
  <Style
    type="text"
    autoComplete="off"
    autoCorrect="off"
    defaultValue={defaultValue}
    placeholder={placeholder}
    onChange={onChange}
    value={value}
    onKeyDown={onKeyDown}
  />
)

export default TextInput
