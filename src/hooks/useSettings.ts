import { useEffect, useState } from 'react'
import { keys, set, get, Store } from 'idb-keyval'

const store = new Store('startpage', 'user-preferences')

type Value = string | boolean

type Settings = {
  name?: string
  searchEngine?: string
  prefersDarkMode?: boolean
}

export const availableSettings = {
  NAME: 'name',
  SEARCH_ENGINE: 'searchEngine',
  PREFERS_DARK_MODE: 'prefersDarkMode',
}

type UseSettings = {
  settings: Settings
  setSetting: (setting: string, value: Value) => void
}

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

const useSettings = (): UseSettings => {
  const [settings, setSettings] = useState<Settings>({})

  useEffect(() => {
    ;(async () => {
      const s = await getSettings()
      setSettings(s)
    })()
  }, [])

  const setSetting = (setting: string, value: Value) => {
    set(setting, value, store).then(() => {
      setSettings(prevState => ({
        ...prevState,
        [setting]: value,
      }))
    })
  }

  return {
    settings,
    setSetting,
  }
}

export default useSettings
