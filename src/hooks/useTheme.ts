import { useEffect, useState } from 'react'

import getTheme from '@global/theme'
import { Theme } from '@emotion/react'

type UseTheme = {
  theme: Theme
}

const matchMediaFallback = (): boolean =>
  window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches

const useTheme = (isDarkMode: boolean = matchMediaFallback()): UseTheme => {
  const [theme, setTheme] = useState(getTheme(isDarkMode))

  useEffect(() => {
    setTheme(getTheme(isDarkMode))
  }, [isDarkMode])

  return { theme }
}

export default useTheme
