import { useEffect, useState } from 'react'

type Settings = {
  name?: string
  searchEngine?: string
  prefersDarkMode?: string
}

type UseSettings = {
  settings: Settings
  setSetting: (setting: string, value: string) => void
}

const settingsList = ['name', 'searchEngine', 'prefersDarkMode']

const savedSettings = () => {
  let s: Settings = {}

  settingsList.map(availableSetting => {
    if (window.localStorage.getItem(availableSetting)) {
      s = {
        ...s,
        [availableSetting]: window.localStorage.getItem(availableSetting),
      }
    }
  })

  return s
}

const useSettings = (): UseSettings => {
  const [settings, setSettings] = useState<Settings>(savedSettings())

  const setSetting = (setting: string, value: string) =>
    setSettings({
      ...settings,
      [setting]: value,
    })

  useEffect(() => {
    for (const [key, value] of Object.entries(settings)) {
      window.localStorage.setItem(key, String(value))
    }
  }, [settings])

  return {
    settings,
    setSetting,
  }
}

export default useSettings
