import { useEffect, useState } from 'react'

import getTheme from '@global/theme'
import { Theme } from '@emotion/react'

const useTheme = (isDarkMode: boolean): Theme => {
  const [theme, setTheme] = useState(getTheme(isDarkMode))

  useEffect(() => {
    setTheme(getTheme(isDarkMode))
  }, [isDarkMode])

  return theme
}

export default useTheme
