import * as React from 'react'

import { keys, set, del, getMany, createStore } from 'idb-keyval'

import type { BookmarkLink, BookmarkLinks } from '../types'
import type { Theme } from '@emotion/react'

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
  children: React.ReactNode
}

type SettingsContextType = {
  settings: {
    name?: string
    searchEngine?: string
    weather?: boolean
    bookmarks?: BookmarkLinks
    themeLight?: Theme
    themeDark?: Theme
    prefersDarkMode?: boolean
    showFavicons?: boolean
  }
  setSetting: <
    T extends
      | string
      | boolean
      | BookmarkLink[]
      | undefined
      | Record<string, any>
  >(
    setting: string,
    value: T
  ) => void
  deleteSetting: (setting: string) => void
}

export const SettingsContext = React.createContext<SettingsContextType>({
  settings: {},
  setSetting: () => null,
  deleteSetting: () => null,
})

const SettingsProvider = ({ children }: SettingsProviderProps): JSX.Element => {
  const [settings, setSettings] = React.useState({})

  React.useEffect(() => {
    ;(async () => {
      const s = await getSettings()
      setSettings(s)
    })()
  }, [])

  const setSetting = <
    T extends
      | string
      | boolean
      | BookmarkLink[]
      | undefined
      | Record<string, unknown>
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

  return (
    <SettingsContext.Provider value={{ settings, setSetting, deleteSetting }}>
      {children}
    </SettingsContext.Provider>
  )
}

export default SettingsProvider
