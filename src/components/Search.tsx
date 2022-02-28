import * as React from 'react'

import styled from '@emotion/styled'
import axios from 'axios'

import { searchEngines } from '../config'
import { SettingsContext } from '../context/SettingsProvider'
import { useListKeyboardNav } from '../hooks/useListKeyboardNav'

const Suggestions = styled.ul`
  position: absolute;
  top: calc(100% - 1px);
  width: calc(100% - 2px);
  max-height: 500px;
  border-right: 1px solid #00ffbf;
  border-bottom: 1px solid #00ffbf;
  border-left: 1px solid #00ffbf;
  background: #2d3f5f;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  color: #fff;
  font-size: 0.8rem;
  list-style-type: none;
  overflow-y: auto;

  li:nth-of-type(odd) a {
    background: #263550;
  }

  li a {
    display: block;
    padding: 10px;
    color: #fff;
    text-decoration: none;

    &:focus {
      border: none;
      background: #00ffbf;
      box-shadow: none;
      color: #2d3f5f;
      outline: none;
    }
  }
`

const fetchSuggestions = async (q: string): Promise<string[]> => {
  if (q) {
    const { data } = await axios.get(
      `https://cors-anywhere.herokuapp.com/suggestqueries.google.com/complete/search?client=firefox&q=${q}`
    )

    return data[1]
  }

  return []
}

const Search = (): JSX.Element => {
  const {
    settings: { searchEngine = 'Google' },
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

  React.useEffect(() => {
    if (searchParam) {
      ;(async () => {
        const results = await fetchSuggestions(searchParam)

        setSuggestions(results)
      })()
    }
  }, [searchParam])

  return (
    <form
      action={searchEngines.find(f => f.label === searchEngine)?.url}
      method="get"
    >
      <input
        ref={inputSearchRef}
        type="search"
        name="q"
        placeholder={`Search ${searchEngine}...`}
        autoFocus
        onChange={e => setSearchParam(e.target.value)}
        onKeyDown={selectInitialResult}
      />
      <Suggestions ref={searchSuggestionsRef}>
        {suggestions.map(suggestion => (
          <li
            key={suggestion}
            onMouseOver={onResultsHover}
            onKeyDown={onResultsKeyDown}
          >
            <a href={`https://www.google.com/search?q=${suggestion}`}>
              {suggestion}
            </a>
          </li>
        ))}
      </Suggestions>
    </form>
  )
}

export default Search
