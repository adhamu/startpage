import * as React from 'react'
import { keys, set, get } from 'idb-keyval'
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

interface Props {
  children: (value: UseSettings) => React.ReactNode
}

type Settings = {
  [key in string]?: any
}

interface UseSettings {
  settings: Settings
  setSetting: (setting: string, value: any) => void
}

export const AppContext = React.createContext(null)

const AppProvider2 = ({ children }: Props): JSX.Element => {
  const [settings, setSettings] = React.useState({})

  React.useEffect(() => {
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

  return (
    <AppContext.Provider value={{ settings, setSetting }}>
      {children}
    </AppContext.Provider>
  )
}

export default AppProvider2
