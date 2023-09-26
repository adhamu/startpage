import { useContext } from 'react'

import TextInput from './TextInput'
import { SettingsContext } from '../../context/SettingsProvider'

const Name = () => {
  const {
    settings: { name },
    setSetting,
  } = useContext(SettingsContext)

  return (
    <>
      <label>Name</label>
      <TextInput
        value={name ?? ''}
        placeholder="Enter your name"
        onChange={e => setSetting('name', e.target.value)}
      />
    </>
  )
}

export default Name
