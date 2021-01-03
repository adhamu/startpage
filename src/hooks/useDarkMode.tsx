import { useState } from 'react'

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

type UseDarkMode = {
  isDarkMode: boolean
  toggleDarkMode: () => void
}

const useDarkMode = (): UseDarkMode => {
  const [isDarkMode, setIsDarkMode] = useState(isPrefersDarkMode())

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode)
    window.localStorage.setItem('prefersDarkMode', String(!isDarkMode))
  }

  return {
    isDarkMode,
    toggleDarkMode,
  }
}

export default useDarkMode
