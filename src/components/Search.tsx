import * as React from 'react'

import styled from '@emotion/styled'
import axios from 'axios'

import type { SearchEngine } from '../types'

import { Engine, searchEngines } from '../config'
import { SettingsContext } from '../context/SettingsProvider'
import { useListKeyboardNav } from '../hooks/useListKeyboardNav'

const Form = styled.form`
  position: relative;
`

const Suggestions = styled.ul`
  position: absolute;
  top: calc(100% - 1px);
  width: calc(100% - 4px);
  max-height: 500px;
  border-right: 2px solid ${props => props.theme.colors.border};
  border-bottom: 2px solid ${props => props.theme.colors.border};
  border-left: 2px solid ${props => props.theme.colors.border};
  background: ${props => props.theme.colors.background};
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  font-size: 1rem;
  list-style-type: none;
  overflow-y: auto;

  li a {
    display: block;
    padding: 10px;
    color: ${props => props.theme.colors.body};
    text-decoration: none;

    &:focus {
      border: none;
      background: ${props => props.theme.colors.highlight};
      box-shadow: none;
      color: ${props => props.theme.colors.background};
      font-weight: bold;
      outline: none;
    }
  }
`

const fetchSuggestions = async (
  q: string,
  engine?: SearchEngine
): Promise<string[]> => {
  if (q) {
    const { data } = await axios.get(
      `/.netlify/functions/searchSuggestions?q=${q}&engine=${engine?.label}`
    )

    return data
  }

  return []
}

const Search = (): JSX.Element => {
  const {
    settings: { searchEngine = Engine.GOOGLE },
  } = React.useContext(SettingsContext)

  const [searchParam, setSearchParam] = React.useState('')
  const [suggestions, setSuggestions] = React.useState<string[]>([])

  const {
    inputSearchRef,
    searchSuggestionsRef,
    selectInitialResult,
    onResultsHover,
    onResultsKeyDown,
  } = useListKeyboardNav()

  const engine = searchEngines.find(f => f.label === searchEngine)

  React.useEffect(() => {
    if (searchParam) {
      ;(async () => {
        const results = await fetchSuggestions(searchParam, engine)

        setSuggestions(results)
      })()
    } else {
      setSuggestions([])
    }
  }, [searchParam])

  return (
    <Form action={engine?.url} method="get" spellCheck="false">
      <input
        ref={inputSearchRef}
        type="search"
        name="q"
        placeholder={`Search ${searchEngine}...`}
        autoFocus
        onChange={e => setSearchParam(e.target.value)}
        onKeyDown={selectInitialResult}
      />
      {suggestions.length > 0 && (
        <Suggestions ref={searchSuggestionsRef}>
          {suggestions.map(suggestion => (
            <li
              key={suggestion}
              onMouseOver={onResultsHover}
              onKeyDown={onResultsKeyDown}
            >
              <a href={`${engine?.url}?q=${suggestion}`}>{suggestion}</a>
            </li>
          ))}
        </Suggestions>
      )}
    </Form>
  )
}

export default Search
