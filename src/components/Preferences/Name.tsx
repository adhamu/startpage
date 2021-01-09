import * as React from 'react'
import { SettingsContext } from '@context/SettingsProvider'

const Name = (): JSX.Element => {
  const {
    settings: { name },
    setSetting,
  } = React.useContext(SettingsContext)

  return (
    <>
      <label>Name</label>
      <input
        type="text"
        defaultValue={name}
        onChange={e => setSetting('name', e.target.value)}
      />
    </>
  )
}

export default Name
