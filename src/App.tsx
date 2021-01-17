import * as React from 'react'
import styled from '@emotion/styled'

import Wrapper from '@global/Wrapper'
import Preferences from '@global/components/Preferences'
import SettingsProvider from '@context/SettingsProvider'
import Search from '@components/Search'
import Bookmarks from '@components/Bookmarks'
import Greeting from '@components/Greeting'
import DateTime from '@components/DateTime'
import Menu from '@components/Menu'
import Weather from '@components/Weather'

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
            <Weather />
            <Greeting />
            <Search />
            <Bookmarks />
          </Main>
          <Preferences menuOpen={menuOpen} />
        </Layout>
      </Wrapper>
    </SettingsProvider>
  )
}
export default App
