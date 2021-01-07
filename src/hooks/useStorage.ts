import { useEffect, useState } from 'react'
import useSettings from '@hooks/useSettings'

const useStorage = <T>(
  key: string,
  initialState: T = null
): readonly [T, (value: T) => void] => {
  const [item, setItem] = useState<T>(initialState)
  const { settings, setSetting } = useSettings<T>()

  useEffect(() => {
    setItem(settings[key])
  }, [settings])

  return [
    item,
    (value: T) => {
      setItem(value)
      return setSetting(key, value)
    },
  ] as const
}

export default useStorage
