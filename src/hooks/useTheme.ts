import { useContext, useEffect, useState } from 'react'

import getTheme from '@global/theme'
import { Theme } from '@emotion/react'
import { SettingsContext } from '@global/context/SettingsProvider'

const matchMediaFallback = (): boolean =>
  window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches

const useTheme = (): Theme => {
  const {
    settings: { themeLight, themeDark, prefersDarkMode = matchMediaFallback() },
  } = useContext(SettingsContext)
  const [theme, setTheme] = useState(getTheme(prefersDarkMode))

  const refreshTheme = () => {
    if (prefersDarkMode) {
      themeDark !== undefined ? setTheme(themeDark) : setTheme(getTheme(true))
    } else {
      themeLight !== undefined
        ? setTheme(themeLight)
        : setTheme(getTheme(false))
    }
  }

  useEffect(() => {
    refreshTheme()
  }, [prefersDarkMode, themeLight, themeDark])

  return theme
}

export default useTheme
