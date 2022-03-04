import * as React from 'react'

import SearchSuggestions from '@adhamu/react-search-suggestions'
import styled from '@emotion/styled'
import axios from 'axios'

import type { SearchEngine } from '../types'

import { Engine, searchEngines } from '../config'
import { SettingsContext } from '../context/SettingsProvider'

const StyledSearchSuggestions = styled(SearchSuggestions)`
  ul {
    border: 2px solid ${props => props.theme.colors.border};
    border-top: 0;
    border-bottom-left-radius: 2px;
    border-bottom-right-radius: 2px;
    font-size: 1rem;

    li a {
      padding: 10px;
      background: ${props => props.theme.colors.background};
      color: ${props => props.theme.colors.body};

      &:focus {
        border: none;
        background: ${props => props.theme.colors.highlight};
        box-shadow: none;
        color: ${props => props.theme.colors.background};
        font-weight: bold;
        outline: none;
      }
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
    <form action={engine?.url} method="get" spellCheck="false">
      <StyledSearchSuggestions
        suggestions={suggestions.map(suggestion => ({
          label: suggestion,
          url: `${engine?.url}?q=${suggestion}`,
        }))}
        placeholder={`Search ${searchEngine}...`}
        autoFocus={true}
        onChange={e => setSearchParam(e.target.value)}
      />
    </form>
  )
}

export default Search
