import { useState } from 'react'

type Settings = {
  name?: string
  searchEngine?: string
  prefersDarkMode?: string
}

export const availableSettings = {
  NAME: 'name',
  SEARCH_ENGINE: 'searchEngine',
  PREFERS_DARK_MODE: 'prefersDarkMode',
}

type UseSettings = {
  settings: Settings
  setSetting: (setting: string, value: string) => void
}

const savedSettings = () => {
  let s: Settings = {}

  for (const [, availableSetting] of Object.entries(availableSettings)) {
    if (window.localStorage.getItem(availableSetting)) {
      s = {
        ...s,
        [availableSetting]: window.localStorage.getItem(availableSetting),
      }
    }
  }

  return s
}

const useSettings = (): UseSettings => {
  const [settings, setSettings] = useState<Settings>(savedSettings())

  const setSetting = (setting: string, value: string) => {
    window.localStorage.setItem(setting, value)
    setSettings(savedSettings())
  }

  return {
    settings,
    setSetting,
  }
}

export default useSettings
