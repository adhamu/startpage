import * as React from 'react'

import styled from '@emotion/styled'

import Wrapper from './Wrapper'
import Bookmarks from './components/Bookmarks'
import DateTime from './components/DateTime'
import Greeting from './components/Greeting'
import Loading from './components/Loading'
import Menu from './components/Menu'
import Search from './components/Search'
import SettingsProvider from './context/SettingsProvider'

const Weather = React.lazy(() => import('./components/Weather'))
const Preferences = React.lazy(() => import('./components/Preferences'))

const Layout = styled.div`
  max-width: 960px;
  padding: 0 1em;
  margin: 8em auto;
`

const Main = styled.div<{ menuOpen: boolean }>`
  display: ${props => (props.menuOpen ? 'none' : 'block')};
`

const App = (): JSX.Element => {
  const [menuOpen, setMenuOpen] = React.useState(false)

  return (
    <SettingsProvider>
      <Wrapper>
        <Menu menuOpen={menuOpen} onClick={() => setMenuOpen(!menuOpen)} />
        <Layout>
          <DateTime />
          <Main menuOpen={menuOpen}>
            <React.Suspense fallback={<Loading />}>
              <Weather />
            </React.Suspense>
            <Greeting />
            <Search />
            <Bookmarks />
          </Main>
          <React.Suspense fallback={<Loading />}>
            <Preferences menuOpen={menuOpen} />
          </React.Suspense>
        </Layout>
      </Wrapper>
    </SettingsProvider>
  )
}
export default App
