import { useContext, useEffect, useState } from 'react'

import type { Theme } from '@emotion/react'

import { SettingsContext } from '../context/SettingsProvider'
import { getTheme } from '../theme'
import { matchMediaFallback } from '../utils'

export const useTheme = (): Theme => {
  const {
    settings: { themeLight, themeDark, prefersDarkMode = matchMediaFallback() },
  } = useContext(SettingsContext)
  const [theme, setTheme] = useState(getTheme(prefersDarkMode))

  useEffect(() => {
    const refreshTheme = () => {
      if (prefersDarkMode) {
        return themeDark !== undefined
          ? setTheme(themeDark)
          : setTheme(getTheme(true))
      }

      return themeLight !== undefined
        ? setTheme(themeLight)
        : setTheme(getTheme(false))
    }
    refreshTheme()
  }, [prefersDarkMode, themeLight, themeDark])

  return theme
}
