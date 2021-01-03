import * as React from 'react'
import styled from '@emotion/styled'

const Search = styled.form``

const InputText = styled.input`
  width: 100%;
  border: 1px solid #efefef;
  font-size: 18px;
  outline: none;
  padding: 10px 4px;

  &:focus {
    border: 1px solid #000;
  }
`

const engines = {
  Google: 'https://www.google.co.uk/search',
  DuckDuckGo: 'https://duckduckgo.com',
  Startpage: 'https://www.startpage.com/sp/search',
}

export default (): JSX.Element => {
  const [selectedEngine, setSelectedEngine] = React.useState('Google')
  return (
    <>
      <Search action={engines[selectedEngine]} method="get" target="_blank">
        <InputText
          type="search"
          name="q"
          placeholder={`Search ${selectedEngine}...`}
          autoFocus
        />
      </Search>
      <select onChange={e => setSelectedEngine(e.target.value)}>
        {Object.keys(engines).map((engine, key) => (
          <option key={key} selected={engine === selectedEngine}>
            {engine}
          </option>
        ))}
      </select>
    </>
  )
}
