import * as React from 'react'
import styled from '@emotion/styled'
import { searchEngines } from '@global/config'
import useStorage from '@hooks/useStorage'
import { BookmarkLinks } from '@global/types'

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
  const [name, setName] = useStorage<string>('name')
  const [searchEngine, setSearchEngine] = useStorage('searchEngine', 'Google')
  const [bookmarks, setBookmarks] = useStorage<BookmarkLinks>('bookmarks', [])

  const [label, setLabel] = React.useState('')
  const [url, setUrl] = React.useState('')

  const addBookmark = () => {
    if (label && url && !bookmarks.find(f => f.url === url)) {
      if (bookmarks !== undefined) {
        setBookmarks([...bookmarks, { label, url }])
      } else {
        setBookmarks([{ label, url }])
      }
      setLabel('')
      setUrl('')
    }
  }

  const removeBookmark = (label: string, url: string) => {
    setBookmarks(bookmarks.filter(f => f.label !== label && f.url !== url))
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
          onChange={e => setName(e.target.value)}
        />
      </fieldset>
      <fieldset>
        <legend>Search Engine</legend>
        <select
          onChange={e => setSearchEngine(e.target.value)}
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
        {bookmarks?.map(({ url, label }, key) => (
          <p key={key}>
            <a href={url}>{label}</a>
            <button onClick={() => removeBookmark(label, url)}>Remove</button>
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
