import * as React from 'react'

import axios from 'axios'
import { InputSuggestions } from 'react-input-suggestions'

import styled from '@emotion/styled'

import { Engine, searchEngines } from '../config'
import { SettingsContext } from '../context/SettingsProvider'
import type { SearchEngine } from '../types'

const StyledInputSuggestions = styled(InputSuggestions)`
  ul {
    border: 2px solid ${props => props.theme.colors.border};
    border-top: 0;
    margin-top: -2px;
    border-bottom-left-radius: 2px;
    border-bottom-right-radius: 2px;
    font-size: 1rem;

    li a {
      padding: 10px;
      background: ${props => props.theme.colors.background};
      color: ${props => props.theme.colors.body};

      mark {
        background: transparent;
        color: ${props => props.theme.colors.highlight};
        font-weight: bold;
      }

      &:focus {
        background: ${props => props.theme.colors.highlight};
        color: ${props => props.theme.colors.background};

        mark {
          color: ${props => props.theme.colors.background};
        }
      }
    }
  }
`

const fetchSuggestions = async (
  q: string,
  engine?: SearchEngine
): Promise<string[]> => {
  if (q) {
    const abortController = new AbortController()
    const { data } = await axios.get(
      `/.netlify/functions/searchSuggestions?q=${q}&engine=${engine?.label}`,
      { signal: abortController.signal }
    )
    abortController.abort()

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
  }, [engine, searchParam])

  return (
    <form action={engine?.url} method="get" spellCheck="false">
      <StyledInputSuggestions
        suggestions={suggestions.map(suggestion => (
          <a key={suggestion} href={`${engine?.url}?q=${suggestion}`}>
            {suggestion}
          </a>
        ))}
        placeholder={`Search ${searchEngine}...`}
        onChange={e => setSearchParam(e.target.value)}
        autoFocus
        highlightKeywords
      />
    </form>
  )
}

export default Search
