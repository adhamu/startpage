import { useEffect, useState } from 'react'
import { keys, set, get } from 'idb-keyval'
import { BookmarkLink } from '@global/types'
import { store } from '@global/config'

type Value = string | boolean | BookmarkLink

type Settings = {
  [key in string]: any
}

type UseSettings = {
  settings: Settings
  setSetting: (setting: string, value: any) => void
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

  const setSetting = (setting: string, value: any) => {
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
