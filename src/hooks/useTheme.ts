import { useEffect, useState } from 'react'

import getTheme from '@global/theme'
import { Theme } from '@emotion/react'

type UseTheme = {
  theme: Theme
}

const useTheme = (isDarkMode: boolean): UseTheme => {
  const [theme, setTheme] = useState(getTheme(isDarkMode))

  useEffect(() => {
    setTheme(getTheme(isDarkMode))
  }, [isDarkMode])

  return { theme }
}

export default useTheme
