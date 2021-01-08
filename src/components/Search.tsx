import * as React from 'react'
import { searchEngines } from '@global/config'
import { SettingsContext } from '@global/context/SettingsProvider'

export default (): JSX.Element => {
  const {
    settings: { searchEngine = 'Google' },
  } = React.useContext(SettingsContext)

  return (
    <form action={searchEngines[searchEngine]} method="get">
      <input
        type="search"
        name="q"
        placeholder={`Search ${searchEngine}...`}
        autoFocus
      />
    </form>
  )
}
