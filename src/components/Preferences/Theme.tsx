import * as React from 'react'
import { SettingsContext } from '@context/SettingsProvider'

const Theme = (): JSX.Element => {
  const {
    settings: { theme },
    setSetting,
  } = React.useContext(SettingsContext)

  return (
    <>
      <label>Name</label>
      {theme &&
        Object.keys(theme.colors).map((option, key) => (
          <React.Fragment key={key}>
            <label>{option}</label>
            <input
              type="color"
              defaultValue={theme.colors[option]}
              onChange={e => {
                setSetting('theme', {
                  colors: {
                    ...theme.colors,
                    [option]: e.target.value,
                  },
                })
              }}
            />
          </React.Fragment>
        ))}
    </>
  )
}

export default Theme
