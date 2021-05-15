import { useContext, useEffect, useState } from 'react'

import getTheme from '../theme'
import { Theme } from '@emotion/react'
import { SettingsContext } from '../context/SettingsProvider'
import { matchMediaFallback } from '../utils'

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
