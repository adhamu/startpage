import * as React from 'react'
import styled from '@emotion/styled'

import { SettingsContext } from '../../context/SettingsProvider'
import Switch from '../Switch'

const QuickSettings = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
`

export default (): JSX.Element => {
  const {
    settings: { weather = false, showFavicons = true },
    setSetting,
  } = React.useContext(SettingsContext)

  return (
    <QuickSettings>
      <div>
        <label>Show Favicons</label>
        <Switch
          checked={showFavicons}
          onChange={() => setSetting('showFavicons', !showFavicons)}
        />
      </div>
      <div>
        <label>Show Weather</label>
        <Switch
          checked={weather}
          onChange={() => setSetting('weather', !weather)}
        />
      </div>
    </QuickSettings>
  )
}
