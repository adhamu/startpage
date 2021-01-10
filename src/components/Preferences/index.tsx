import * as React from 'react'
import styled from '@emotion/styled'

import Name from '@preferences/Name'
import Bookmarks from '@preferences/Bookmarks'
import SearchEngine from '@preferences/SearchEngine'
import Theme from './Theme'

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
    <Bookmarks />
  </Preferences>
)
