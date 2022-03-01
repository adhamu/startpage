import * as React from 'react'

import styled from '@emotion/styled'

import { Engine, searchEngines } from '../../config'
import { SettingsContext } from '../../context/SettingsProvider'
import { DuckDuckGo, Google, Startpage } from '../../icons'

const searchIconMap: Record<
  string,
  React.FunctionComponentElement<Record<string, never>>
> = {
  [Engine.GOOGLE]: React.createElement(Google),
  [Engine.DUCKDUCKGO]: React.createElement(DuckDuckGo),
  [Engine.STARTPAGE]: React.createElement(Startpage),
}

const Product = styled.button<{ isActive: boolean }>`
  padding: 20px 30px 16px;
  border: 0;

  border: 2px solid ${props => props.theme.colors.border};
  margin-right: 1em;
  margin-bottom: 1em;
  background: 0;
  cursor: pointer;

  ${props =>
    props.isActive ? `border-color: ${props.theme.colors.highlight};` : ''}

  svg {
    width: auto;
    height: 40px;
  }
`

const SearchEngine = (): JSX.Element => {
  const {
    setSetting,
    settings: { searchEngine = 'Google' },
  } = React.useContext(SettingsContext)

  return (
    <>
      <label>Search Engine</label>
      {searchEngines.map(engine => (
        <Product
          key={engine.label}
          isActive={searchEngine === engine.label}
          onClick={() => setSetting('searchEngine', engine.label)}
        >
          {searchIconMap[engine.label]}
        </Product>
      ))}
    </>
  )
}

export default SearchEngine
