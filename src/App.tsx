import * as React from 'react'
import styled from '@emotion/styled'

import AppProvider from '@global/AppProvider'
import Search from '@components/Search'
import Bookmarks from '@components/Bookmarks'
import Greeting from '@components/Greeting'
import DateTime from '@components/DateTime'

const Main = styled.div`
  max-width: 850px;
  margin: 8em auto;
  padding: 0 1em;
`

const App = (): JSX.Element => (
  <AppProvider>
    <Main>
      <DateTime />
      <Greeting />
      <Search />
      <Bookmarks />
    </Main>
  </AppProvider>
)

export default App
