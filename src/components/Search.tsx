import * as React from 'react'
import styled from '@emotion/styled'

import useSettings, { availableSettings } from '@hooks/useSettings'

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

const engines: Record<string, string> = {
  Google: 'https://www.google.co.uk/search',
  DuckDuckGo: 'https://duckduckgo.com',
  Startpage: 'https://www.startpage.com/sp/search',
}

export default (): JSX.Element => {
  const { SEARCH_ENGINE } = availableSettings

  const {
    settings: { searchEngine = 'Google' },
    setSetting,
  } = useSettings()

  return (
    <>
      <form action={engines[searchEngine]} method="get">
        <InputText
          type="search"
          name="q"
          placeholder={`Search ${searchEngine}...`}
          autoFocus
        />
      </form>
      <SearchEngines>
        {Object.keys(engines).map((engine, key) => (
          <SearchEngine key={key}>
            <label>
              <input
                type="radio"
                onChange={() => setSetting(SEARCH_ENGINE, engine)}
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
