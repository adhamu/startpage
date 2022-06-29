import styled from '@emotion/styled'

import BackupRestore from './BackupRestore'
import Bookmarks from './Bookmarks'
import Name from './Name'
import QuickSettings from './QuickSettings'
import SearchEngine from './SearchEngine'
import Theme from './Theme'

const Style = styled.div<{ menuOpen: boolean }>`
  display: ${props => (props.menuOpen ? 'block' : 'none')};
`

const Preferences = ({ menuOpen }: { menuOpen: boolean }): JSX.Element => (
  <Style menuOpen={menuOpen}>
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
    <br />
    <br />
    <BackupRestore />
  </Style>
)

export default Preferences
