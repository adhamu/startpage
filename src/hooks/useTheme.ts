import { useState } from 'react'
import { Theme } from '@emotion/react'

import getTheme from '@global/theme'
import useSettings, { availableSettings } from '@hooks/useSettings'

type UseDarkMode = {
  isDarkMode: boolean
  toggleDarkMode: () => void
  theme: Theme
}

const isPrefersDarkMode = (): boolean =>
  window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches

const useTheme = (): UseDarkMode => {
  const { PREFERS_DARK_MODE } = availableSettings
  const {
    settings: { prefersDarkMode },
    setSetting,
  } = useSettings()

  const [isDarkMode, setIsDarkMode] = useState(
    prefersDarkMode ? prefersDarkMode === 'true' : isPrefersDarkMode()
  )

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode)
    setSetting(PREFERS_DARK_MODE, String(!isDarkMode))
  }

  return {
    isDarkMode,
    toggleDarkMode,
    theme: getTheme(isDarkMode),
  }
}

export default useTheme
