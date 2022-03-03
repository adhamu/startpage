import * as React from 'react'

import axios from 'axios'

import type { SearchEngine } from '../types'

import { Engine, searchEngines } from '../config'
import { SettingsContext } from '../context/SettingsProvider'
import { useTheme } from '../hooks/useTheme'
import Autocomplete from './Autocomplete'

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
  const theme = useTheme()

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
      <Autocomplete
        colourTheme={{
          borderColour: theme.colors.border,
          backgroundColour: theme.colors.background,
          colour: theme.colors.body,
          activeBackgroundColour: theme.colors.highlight,
          activeColour: theme.colors.background,
        }}
        suggestions={suggestions.map(suggestion => (
          <a key={suggestion} href={`${engine?.url}?q=${suggestion}`}>
            {suggestion}
          </a>
        ))}
        placeholder={`Search ${searchEngine}...`}
        autoFocus={true}
        onChange={e => setSearchParam(e.target.value)}
      />
    </form>
  )
}

export default Search
