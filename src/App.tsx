import * as React from 'react'
import styled from '@emotion/styled'

import { getDate, timeOfDay } from '@global/date'
import Time from '@components/Time'
import Search from '@components/Search'
import Bookmarks from '@components/Bookmarks'
import DarkModeToggle from '@components/DarkModeToggle'
import useSettings from '@hooks/useSettings'
import AppProvider from './AppProvider'

const Main = styled.div`
  max-width: 850px;
  margin: 8em auto;
  padding: 0 1em;
`

const Date = styled.h4`
  color: ${props => props.theme.colors.heading};
  margin-bottom: 1em;
  padding-bottom: 1em;
  border-bottom: 1px solid ${props => props.theme.colors.border};
`

const Greeting = styled.div`
  font-size: 3em;
  margin-bottom: 1em;
  line-height: 1em;
`

const App = (): JSX.Element => {
  const {
    setSetting,
    settings: { prefersDarkMode, name, searchEngine },
  } = useSettings()

  return (
    <AppProvider prefersDarkMode={prefersDarkMode}>
      <DarkModeToggle
        isDarkMode={prefersDarkMode}
        toggleDarkMode={() => setSetting('prefersDarkMode', !prefersDarkMode)}
      />
      <Time />
      <Main>
        <Date>{getDate()}</Date>
        <Greeting>
          Good {timeOfDay()}
          {name && `, ${name}`}
        </Greeting>
        <Search
          searchEngine={searchEngine || 'Google'}
          changeEngine={(value: string) => setSetting('searchEngine', value)}
        />
        <Bookmarks />
      </Main>
    </AppProvider>
  )
}

export default App
