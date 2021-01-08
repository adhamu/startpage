import * as React from 'react'
import styled from '@emotion/styled'

import Wrapper from '@global/Wrapper'
import Search from '@components/Search'
import Bookmarks from '@components/Bookmarks'
import Greeting from '@components/Greeting'
import DateTime from '@components/DateTime'
import Preferences from './components/Preferences'
import Hamburger from './components/Hamburger'
import SettingsProvider from './context/SettingsProvider'

const Main = styled.div`
  max-width: 850px;
  margin: 8em auto;
  padding: 0 1em;
`

const App = (): JSX.Element => (
  <SettingsProvider>
    <Wrapper>
      <Hamburger />
      <Main>
        <DateTime />
        <Greeting />
        <Search />
        <Bookmarks />
        <br />
        <br />
        <Preferences />
      </Main>
    </Wrapper>
  </SettingsProvider>
)

export default App
