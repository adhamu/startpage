import { useEffect, useState } from 'react'
import { keys, set, get } from 'idb-keyval'
import { store } from '@global/config'

type Settings<T> = {
  [key in string]?: T
}

type UseSettings<T> = {
  settings: Settings<T>
  setSetting: (setting: string, value: T) => void
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

const useSettings = <T>(): UseSettings<T> => {
  const [settings, setSettings] = useState<Settings<T>>({})

  useEffect(() => {
    ;(async () => {
      const s = await getSettings()
      setSettings(s)
    })()
  }, [])

  const setSetting = (setting: string, value: T) => {
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
