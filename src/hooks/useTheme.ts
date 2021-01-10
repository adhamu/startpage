import { useContext, useEffect, useState } from 'react'

import getTheme from '@global/theme'
import { Theme } from '@emotion/react'
import { SettingsContext } from '@global/context/SettingsProvider'

const matchMediaFallback = (): boolean =>
  window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches

const useTheme = (): Theme => {
  const {
    settings: { themeLight, themeDark, prefersDarkMode },
  } = useContext(SettingsContext)
  const [theme, setTheme] = useState(getTheme(matchMediaFallback()))

  const refreshTheme = (prefersDarkMode: boolean) => {
    if (prefersDarkMode) {
      themeDark !== undefined ? setTheme(themeDark) : setTheme(getTheme(true))
    } else {
      themeLight !== undefined
        ? setTheme(themeLight)
        : setTheme(getTheme(false))
    }
  }

  useEffect(() => {
    refreshTheme(prefersDarkMode)
  }, [prefersDarkMode, themeLight, themeDark])

  return theme
}

export default useTheme
