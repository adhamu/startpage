import * as React from 'react'
import styled from '@emotion/styled'
import { BookmarkLink } from '@global/types'
import { SettingsContext } from '@global/context/SettingsProvider'

import { Google, DuckDuckGo, Startpage } from '@global/icons'

const SearchEngine = styled.button<{ isActive: boolean }>`
  background: 0;
  border: 0;
  cursor: pointer;

  ${props => console.log(props.isActive)}

  svg {
    width: 100px;
    height: auto;
  }
`

const Preferences = styled.div<{ menuOpen: boolean }>`
  display: ${props => (props.menuOpen ? 'block' : 'none')};
`

export default ({ menuOpen }: { menuOpen: boolean }): JSX.Element => {
  const {
    settings: { name, searchEngine, bookmarks },
    setSetting,
  } = React.useContext(SettingsContext)

  const [label, setLabel] = React.useState('')
  const [url, setUrl] = React.useState('')

  const addBookmark = () => {
    if (label && url && !bookmarks?.find((f: BookmarkLink) => f.url === url)) {
      if (bookmarks !== undefined) {
        setSetting('bookmarks', [...bookmarks, { label, url }])
      } else {
        setSetting('bookmarks', [{ label, url }])
      }
      setLabel('')
      setUrl('')
    }
  }

  const removeBookmark = (label: string, url: string) => {
    setSetting(
      'bookmarks',
      bookmarks?.filter((f: BookmarkLink) => f.label !== label && f.url !== url)
    )
  }

  return (
    <Preferences menuOpen={menuOpen}>
      <h1>Preferences</h1>
      <label>Name</label>
      <input
        type="text"
        defaultValue={name}
        onChange={e => setSetting('name', e.target.value)}
      />
      <br />
      <br />
      <label>Search Engine</label>
      <SearchEngine isActive={searchEngine === 'Google'}>
        <Google />
      </SearchEngine>
      <SearchEngine isActive={searchEngine === 'DuckDuckGo'}>
        <DuckDuckGo />
      </SearchEngine>
      <SearchEngine isActive={searchEngine === 'Startpage'}>
        <Startpage />
      </SearchEngine>
      <br />
      <br />
      <label>Bookmarks</label>
      {bookmarks?.map((bookmark: BookmarkLink, key: number) => (
        <p key={key}>
          <a href={bookmark.url}>{bookmark.label}</a>
          <button onClick={() => removeBookmark(bookmark.label, bookmark.url)}>
            Remove
          </button>
        </p>
      ))}
      <br />
      <label>Add Bookmark</label>
      <label>Label</label>
      <input
        type="text"
        value={label}
        onChange={e => setLabel(e.target.value)}
      />
      <label>URL</label>
      <input type="text" value={url} onChange={e => setUrl(e.target.value)} />
      <button onClick={() => addBookmark()}>Add</button>
    </Preferences>
  )
}
