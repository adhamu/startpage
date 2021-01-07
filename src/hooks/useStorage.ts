import { useEffect, useState } from 'react'
import useSettings, { Value } from './useSettings'

const useStorage = (key: string, initialState: Value) => {
  const [item, setItem] = useState(initialState)
  const { settings, setSetting } = useSettings()

  useEffect(() => {
    setItem(settings[key])
  }, [settings])

  return [
    item,
    value => {
      setItem(value)
      return setSetting(key, value)
    },
  ]
}

export default useStorage
