import * as React from 'react'
import styled from '@emotion/styled'
import { searchEngines } from '@global/config'
import useStorage from '@global/hooks/useStorage'

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

const SearchEngines = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
  font-size: 12px;
  color: #999;
`

const SearchEngine = styled.div`
  display: inline-block;
  padding-left: 1.5em;

  input {
    margin-right: 0.5em;
  }
`

export default (): JSX.Element => {
  const [searchEngine, setSearchEngine] = useStorage('searchEngine', 'Google')

  return (
    <>
      <form action={searchEngines[searchEngine as string]} method="get">
        <InputText
          type="search"
          name="q"
          placeholder={`Search ${searchEngine}...`}
          autoFocus
        />
      </form>
      <SearchEngines>
        {Object.keys(searchEngines).map((engine, key) => (
          <SearchEngine key={key}>
            <label>
              <input
                type="radio"
                onChange={() => setSearchEngine(engine)}
                checked={engine === searchEngine}
              />
              {engine}
            </label>
          </SearchEngine>
        ))}
      </SearchEngines>
    </>
  )
}
