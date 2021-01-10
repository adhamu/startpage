import * as React from 'react'
import styled from '@emotion/styled'

const TextInput = styled.input`
  padding: 4px 10px;
  font-size: 14px;
`

type Props = {
  defaultValue?: string
  placeholder?: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  value?: string
  ref?: React.RefObject<HTMLInputElement>
}

export default ({
  defaultValue,
  placeholder,
  onChange,
  value,
  ref,
}: Props): JSX.Element => (
  <TextInput
    type="text"
    defaultValue={defaultValue}
    placeholder={placeholder}
    onChange={onChange}
    value={value}
    ref={ref}
  />
)
