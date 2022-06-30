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

const Setting = styled.section`
  margin-bottom: 2em;
`

const Preferences = ({ menuOpen }: { menuOpen: boolean }): JSX.Element => (
  <Style menuOpen={menuOpen}>
    <h1>Preferences</h1>
    <Setting>
      <Name />
    </Setting>
    <Setting>
      <Theme />
    </Setting>
    <Setting>
      <SearchEngine />
    </Setting>
    <Setting>
      <QuickSettings />
    </Setting>
    <Setting>
      <Bookmarks />
    </Setting>
    <Setting>
      <BackupRestore />
    </Setting>
  </Style>
)

export default Preferences
