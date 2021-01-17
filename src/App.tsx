import * as React from 'react'
import styled from '@emotion/styled'

import Wrapper from '@global/Wrapper'
import SettingsProvider from '@context/SettingsProvider'
import Search from '@components/Search'
import Bookmarks from '@components/Bookmarks'
import Greeting from '@components/Greeting'
import DateTime from '@components/DateTime'
import Menu from '@components/Menu'
import Loading from './components/Loading'

const Weather = React.lazy(() => import('@components/Weather'))
const Preferences = React.lazy(() => import('@global/components/Preferences'))

const Layout = styled.div`
  max-width: 960px;
  margin: 8em auto;
  padding: 0 1em;
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
