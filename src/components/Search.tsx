import * as React from 'react'

import { searchEngines } from '../config'
import { SettingsContext } from '../context/SettingsProvider'

const Search = (): JSX.Element => {
  const {
    settings: { searchEngine = 'Google' },
  } = React.useContext(SettingsContext)

  return (
    <form
      action={searchEngines.find(f => f.label === searchEngine)?.url}
      method="get"
    >
      <input
        type="search"
        name="q"
        placeholder={`Search ${searchEngine}...`}
        autoFocus
      />
    </form>
  )
}

export default Search
