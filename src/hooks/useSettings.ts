import { useEffect, useState } from 'react'
import { keys, set, get } from 'idb-keyval'
import { BookmarkLink } from '@global/types'
import { store } from '@global/config'

export type Key = 'name' | 'searchEngine' | 'prefersDarkMode'
export type Value = string | boolean | BookmarkLink

type Settings = {
  name?: string
  searchEngine?: string
  prefersDarkMode?: boolean
}

type UseSettings = {
  settings: Settings
  setSetting: (setting: Key, value: Value) => void
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
