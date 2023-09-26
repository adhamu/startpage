import type { FunctionComponentElement } from 'react'
import { createElement, useContext } from 'react'

import styled from '@emotion/styled'

import { Engine, searchEngines } from '../../config'
import { SettingsContext } from '../../context/SettingsProvider'
import { DuckDuckGo, Google, Startpage } from '../../icons'

const searchIconMap: Record<
  string,
  FunctionComponentElement<Record<string, never>>
> = {
  [Engine.GOOGLE]: createElement(Google),
  [Engine.DUCKDUCKGO]: createElement(DuckDuckGo),
  [Engine.STARTPAGE]: createElement(Startpage),
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

const SearchEngine = () => {
  const {
    setSetting,
    settings: { searchEngine = 'Google' },
  } = useContext(SettingsContext)

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
