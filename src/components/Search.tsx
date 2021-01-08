import * as React from 'react'
import styled from '@emotion/styled'
import { searchEngines } from '@global/config'
import useSettings from '@global/hooks/useSettings'

const InputText = styled.input`
  width: 100%;
  border: 1px solid ${props => props.theme.colors.border};
  font-size: 18px;
  outline: none;
  padding: 10px 4px;
  background: transparent;
  color: ${props => props.theme.colors.body};
  border-radius: 0;
  -webkit-appearance: none;

  &:focus {
    border: 1px solid ${props => props.theme.colors.highlight};
  }
`

export default (): JSX.Element => {
  const {
    settings: { searchEngine },
  } = useSettings<string>()

  return (
    <form action={searchEngines[searchEngine]} method="get">
      <InputText
        type="search"
        name="q"
        placeholder={`Search ${searchEngine}...`}
        autoFocus
      />
    </form>
  )
}
