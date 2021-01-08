import * as React from 'react'
import styled from '@emotion/styled'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import AppProvider from '@global/AppProvider'
import Search from '@components/Search'
import Bookmarks from '@components/Bookmarks'
import Greeting from '@components/Greeting'
import DateTime from '@components/DateTime'
import Preferences from './components/Preferences'
import Hamburger from './components/Hamburger'

const Main = styled.div`
  max-width: 850px;
  margin: 8em auto;
  padding: 0 1em;
`

const App = (): JSX.Element => (
  <Router>
    <AppProvider>
      <Hamburger />
      <Main>
        <Switch>
          <Route path="/preferences">
            <Preferences />
          </Route>
          <Route path="/">
            <DateTime />
            <Greeting />
            <Search />
            <Bookmarks />
          </Route>
        </Switch>
      </Main>
    </AppProvider>
  </Router>
)

export default App
