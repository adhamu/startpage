import { useContext, useMemo, useState } from 'react'

import { SettingsContext } from '../context/SettingsProvider'
import { getTheme } from '../theme'

import type { Theme } from '@emotion/react'

export const useTheme = () => {
  const {
    settings: { themeLight, themeDark, prefersDarkMode },
  } = useContext(SettingsContext)

  const [theme, setTheme] = useState<Theme>()

  useMemo(() => {
    let themeToSet

    if (
      prefersDarkMode ||
      window.matchMedia?.('(prefers-color-scheme: dark)')?.matches
    ) {
      themeToSet = themeDark ?? getTheme(true)
    }

    if (
      !prefersDarkMode ||
      !window.matchMedia?.('(prefers-color-scheme: dark)')?.matches
    ) {
      themeToSet = themeLight ?? getTheme(false)
    }

    if (JSON.stringify(themeToSet) !== JSON.stringify(theme)) {
      setTheme(themeToSet)
    }
  }, [prefersDarkMode, themeLight, themeDark])

  return theme
}
