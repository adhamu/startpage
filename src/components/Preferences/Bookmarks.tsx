import * as React from 'react'

import { SettingsContext } from '@context/SettingsProvider'
import { BookmarkLink } from '@global/types'

const Bookmarks = (): JSX.Element => {
  const {
    settings: { bookmarks },
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
    <>
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
    </>
  )
}

export default Bookmarks
