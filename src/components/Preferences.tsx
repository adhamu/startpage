import * as React from 'react'
import styled from '@emotion/styled'
import { searchEngines } from '@global/config'
import { BookmarkLink } from '@global/types'
import { SettingsContext } from '@global/context/SettingsProvider'

const Preferences = styled.div`
  height: 100%;
  position: relative;
  color: ${props => props.theme.colors.body};
  background: ${props => props.theme.colors.background};
  opacity: 0.95;
  top: 0;
  z-index: 1;
`

export default (): JSX.Element => {
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
    <Preferences>
      <h1>Preferences</h1>
      <hr />
      <fieldset>
        <legend>Name</legend>
        <input
          type="text"
          defaultValue={name}
          onChange={e => setSetting('name', e.target.value)}
        />
      </fieldset>
      <fieldset>
        <legend>Search Engine</legend>
        <select
          onChange={e => setSetting('searchEngine', e.target.value)}
          value={searchEngine}>
          {Object.keys(searchEngines).map((engine, key) => (
            <option key={key} value={engine}>
              {engine}
            </option>
          ))}
        </select>
      </fieldset>
      <fieldset>
        <legend>Bookmarks</legend>
        {bookmarks?.map((bookmark: BookmarkLink, key: number) => (
          <p key={key}>
            <a href={bookmark.url}>{bookmark.label}</a>
            <button
              onClick={() => removeBookmark(bookmark.label, bookmark.url)}>
              Remove
            </button>
          </p>
        ))}
        <legend>Add Bookmark</legend>
        <label>Label</label>
        <input
          type="text"
          value={label}
          onChange={e => setLabel(e.target.value)}
        />
        <label>URL</label>
        <input type="text" value={url} onChange={e => setUrl(e.target.value)} />
        <button onClick={() => addBookmark()}>Add</button>
      </fieldset>
    </Preferences>
  )
}
