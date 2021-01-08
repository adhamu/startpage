import * as React from 'react'
import styled from '@emotion/styled'

import Wrapper from '@global/Wrapper'
import SettingsProvider from '@global/context/SettingsProvider'
import Search from '@components/Search'
import Bookmarks from '@components/Bookmarks'
import Greeting from '@components/Greeting'
import DateTime from '@components/DateTime'
import Preferences from '@components/Preferences'
import Menu from '@components/Menu'

const Main = styled.div<{ menuOpen: boolean }>`
  display: ${props => (props.menuOpen ? 'none' : 'block')};
  max-width: 850px;
  margin: 8em auto;
  padding: 0 1em;
`

const App = (): JSX.Element => {
  const [menuOpen, setMenuOpen] = React.useState(false)

  return (
    <SettingsProvider>
      <Wrapper>
        <Menu menuOpen={menuOpen} onClick={() => setMenuOpen(!menuOpen)} />
        <Main menuOpen={menuOpen}>
          <DateTime />
          <Greeting />
          <Search />
          <Bookmarks />
          <br />
          <br />
        </Main>
        <Preferences menuOpen={menuOpen} />
      </Wrapper>
    </SettingsProvider>
  )
}
export default App
