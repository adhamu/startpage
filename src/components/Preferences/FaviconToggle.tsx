import * as React from 'react'
import { SettingsContext } from '@context/SettingsProvider'
import Switch from '../Switch'

const FaviconToggle = (): JSX.Element => {
  const {
    settings: { showFavicons },
  } = React.useContext(SettingsContext)

  return (
    <>
      <label>Show Favicons</label>
      <Switch checked={showFavicons} onChange={null}>
        <span className="dark">Foo</span>
        <span className="light">bar</span>
      </Switch>
    </>
  )
}

export default FaviconToggle
