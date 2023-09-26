import { useContext } from 'react'

import styled from '@emotion/styled'

import { SettingsContext } from '../../context/SettingsProvider'
import Switch from '../Switch'

const Style = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
`

const QuickSettings = () => {
  const {
    settings: { weather = false, showFavicons = true },
    setSetting,
  } = useContext(SettingsContext)

  return (
    <Style>
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
    </Style>
  )
}

export default QuickSettings
