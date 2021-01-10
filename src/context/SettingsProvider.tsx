import * as React from 'react'
import { keys, set, get, del } from 'idb-keyval'

import { store } from '@global/config'

const getSettings = async () => {
  const getKeys = await keys(store)

  const settings = getKeys.reduce(async (acc, curr) => {
    const value = await get(curr, store)

    return {
      ...(await acc),
      [curr as string]: value,
    }
  }, Promise.resolve({}))

  return settings
}

export interface SettingsProviderProps {
  children: React.ReactNode
}

export const SettingsContext = React.createContext(null)

const SettingsProvider = ({ children }: SettingsProviderProps): JSX.Element => {
  const [settings, setSettings] = React.useState({})

  React.useEffect(() => {
    ;(async () => {
      const s = await getSettings()
      setSettings(s)
    })()
  }, [])

  const setSetting = <T extends Record<string, unknown>>(
    setting: string,
    value: T
  ) => {
    set(setting, value, store).then(() => {
      setSettings(prevState => ({
        ...prevState,
        [setting]: value,
      }))
    })
  }

  const deleteSetting = async (setting: string) => {
    await del(setting, store)

    const s = await getSettings()
    setSettings(s)
  }

  return (
    <SettingsContext.Provider value={{ settings, setSetting, deleteSetting }}>
      {children}
    </SettingsContext.Provider>
  )
}

export default SettingsProvider
