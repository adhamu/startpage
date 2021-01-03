import * as React from 'react'
import styled from '@emotion/styled'
import { Theme } from '@global/theme'

const InputText = styled.input<{ theme: Theme }>`
  width: 100%;
  border: 1px solid ${props => props.theme.colors.border};
  font-size: 18px;
  outline: none;
  padding: 10px 4px;
  background: transparent;
  color: ${props => props.theme.colors.body};

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

const engines = {
  Google: 'https://www.google.co.uk/search',
  DuckDuckGo: 'https://duckduckgo.com',
  Startpage: 'https://www.startpage.com/sp/search',
}

export default ({ theme }: { theme: Theme }): JSX.Element => {
  const [selectedEngine, setSelectedEngine] = React.useState('Google')

  return (
    <>
      <form action={engines[selectedEngine]} method="get" target="_blank">
        <InputText
          type="search"
          name="q"
          placeholder={`Search ${selectedEngine}...`}
          autoFocus
          theme={theme}
        />
      </form>
      <SearchEngines>
        {Object.keys(engines).map((engine, key) => (
          <SearchEngine key={key}>
            <label>
              <input
                type="radio"
                onChange={() => setSelectedEngine(engine)}
                checked={engine === selectedEngine}
              />
              {engine}
            </label>
          </SearchEngine>
        ))}
      </SearchEngines>
    </>
  )
}
