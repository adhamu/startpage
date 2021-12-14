import * as React from 'react'

import styled from '@emotion/styled'

import { searchEngines } from '../../config'
import { SettingsContext } from '../../context/SettingsProvider'

const Product = styled.button<{ isActive: boolean }>`
  background: 0;
  border: 0;
  cursor: pointer;

  border: 2px solid ${props => props.theme.colors.border};
  padding: 20px 30px 16px;
  margin-right: 1em;
  margin-bottom: 1em;

  ${props =>
    props.isActive ? `border-color: ${props.theme.colors.highlight};` : ''}

  svg {
    height: 40px;
    width: auto;
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
          {engine.icon}
        </Product>
      ))}
    </>
  )
}

export default SearchEngine
