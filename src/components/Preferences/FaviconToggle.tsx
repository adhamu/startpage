import * as React from 'react'
import { SettingsContext } from '@context/SettingsProvider'
import Switch from '../Switch'

const FaviconToggle = (): JSX.Element => {
  const {
    settings: { showFavicons },
    setSetting,
  } = React.useContext(SettingsContext)

  return (
    <>
      <label>Show Favicons</label>
      <Switch
        checked={showFavicons}
        onChange={() => setSetting('showFavicons', !showFavicons)}
      />
    </>
  )
}

export default FaviconToggle
