import type { ReactNode } from 'react'
import { createContext, useState, useEffect, useMemo } from 'react'

import { keys, set, del, getMany, createStore } from 'idb-keyval'

import type { Theme } from '@emotion/react'

import type { BookmarkLink } from '../types'
import type { UseStore } from 'idb-keyval'

const store = createStore('startpage', 'user-preferences')

const getSettings = async () => {
  const getKeys = await keys(store)
  const getValues = await getMany(getKeys, store)

  return getKeys.reduce(
    (acc, curr, i) => ({ ...acc, [curr as string]: getValues[i as number] }),
    {}
  )
}

export interface SettingsProviderProps {
  children: ReactNode
}

export interface Settings {
  name?: string
  searchEngine?: string
  weather?: boolean
  bookmarks?: BookmarkLink[]
  themeLight?: Theme
  themeDark?: Theme
  prefersDarkMode?: boolean
  showFavicons?: boolean
}

interface SettingsContextType {
  settings: Settings
  setSetting: <T extends string | boolean | BookmarkLink[] | Theme | undefined>(
    setting: string,
    value: T
  ) => void
  deleteSetting: (setting: string) => void
  setSettings: (settings: Settings) => void
  store?: UseStore
}

export const SettingsContext = createContext<SettingsContextType>({
  settings: {},
  setSetting: () => null,
  deleteSetting: () => null,
  setSettings: () => null,
  store: undefined,
})

const SettingsProvider = ({ children }: SettingsProviderProps) => {
  const [settings, setSettings] = useState({})

  useEffect(() => {
    ;(async () => {
      const s = await getSettings()
      setSettings(s)
    })()
  }, [])

  const setSetting = <
    T extends string | boolean | BookmarkLink[] | undefined | Theme,
  >(
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

  const value = useMemo(
    () => ({ settings, setSetting, deleteSetting, setSettings, store }),
    []
  )

  return (
    <SettingsContext.Provider value={value}>
      {children}
    </SettingsContext.Provider>
  )
}

export default SettingsProvider
