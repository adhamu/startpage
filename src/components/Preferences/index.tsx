import * as React from 'react'
import styled from '@emotion/styled'

import Name from './Name'
import Bookmarks from './Bookmarks'
import SearchEngine from './SearchEngine'
import Theme from './Theme'
import QuickSettings from './QuickSettings'

const Preferences = styled.div<{ menuOpen: boolean }>`
  display: ${props => (props.menuOpen ? 'block' : 'none')};
`

export default ({ menuOpen }: { menuOpen: boolean }): JSX.Element => (
  <Preferences menuOpen={menuOpen}>
    <h1>Preferences</h1>
    <Name />
    <br />
    <br />
    <Theme />
    <br />
    <br />
    <SearchEngine />
    <br />
    <br />
    <QuickSettings />
    <br />
    <br />
    <Bookmarks />
  </Preferences>
)
