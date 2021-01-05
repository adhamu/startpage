import { useState } from 'react'
import { Theme } from '@emotion/react'

import getTheme from '@global/theme'

type UseDarkMode = {
  isDarkMode: boolean
  toggleDarkMode: () => void
  theme: Theme
}

const isPrefersDarkMode = (): boolean => {
  if (typeof window !== 'undefined') {
    if (localStorage.getItem('prefersDarkMode')) {
      return localStorage.getItem('prefersDarkMode') === 'true'
    }
    return (
      window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: dark)').matches
    )
  }
}

const useTheme = (): UseDarkMode => {
  const [isDarkMode, setIsDarkMode] = useState(isPrefersDarkMode())

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode)
    window.localStorage.setItem('prefersDarkMode', String(!isDarkMode))
  }

  return {
    isDarkMode,
    toggleDarkMode,
    theme: getTheme(isDarkMode),
  }
}

export default useTheme
