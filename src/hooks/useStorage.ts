import { useEffect, useState } from 'react'
import useSettings, { Key, Value } from '@hooks/useSettings'

type UseStorage = readonly [Value, (value: Value) => void]

const useStorage = (key: Key, initialState: Value = null): UseStorage => {
  const [item, setItem] = useState(initialState)
  const { settings, setSetting } = useSettings()

  useEffect(() => {
    setItem(settings[key])
  }, [settings])

  return [
    item,
    (value: Value) => {
      setItem(value)
      return setSetting(key, value)
    },
  ] as const
}

export default useStorage
