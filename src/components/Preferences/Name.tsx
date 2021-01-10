import * as React from 'react'
import { SettingsContext } from '@context/SettingsProvider'
import TextInput from './TextInput'

const Name = (): JSX.Element => {
  const {
    settings: { name },
    setSetting,
  } = React.useContext(SettingsContext)

  return (
    <>
      <label>Name</label>
      <TextInput
        value={name !== undefined ? name : ''}
        placeholder="Enter your name"
        onChange={e => setSetting('name', e.target.value)}
      />
    </>
  )
}

export default Name
