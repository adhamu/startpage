import { Suspense, lazy, useState } from 'react'

import styled from '@emotion/styled'

import Bookmarks from './components/Bookmarks'
import DateTime from './components/DateTime'
import Greeting from './components/Greeting'
import Loading from './components/Loading'
import Menu from './components/Menu'
import Search from './components/Search'
import SettingsProvider from './context/SettingsProvider'

import Wrapper from './Wrapper'

const Weather = lazy(() => import('./components/Weather'))
const Preferences = lazy(() => import('./components/Preferences'))

const Layout = styled.div`
  position: relative;
  max-width: 960px;
  padding: 0 1em;
  margin: 8em auto;
`

const Main = styled.div<{ menuOpen: boolean }>`
  display: ${props => (props.menuOpen ? 'none' : 'block')};
`

const App = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <SettingsProvider>
      <Wrapper>
        <Menu menuOpen={menuOpen} onClick={() => setMenuOpen(!menuOpen)} />
        <Layout>
          <DateTime />
          <Main menuOpen={menuOpen}>
            <Suspense fallback={<Loading />}>
              <Weather />
            </Suspense>
            <Greeting />
            <Search />
            <Bookmarks />
          </Main>
          <Suspense fallback={<Loading />}>
            <Preferences menuOpen={menuOpen} />
          </Suspense>
        </Layout>
      </Wrapper>
    </SettingsProvider>
  )
}
export default App
