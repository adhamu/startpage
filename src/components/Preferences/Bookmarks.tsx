import * as React from 'react'
import styled from '@emotion/styled'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusSquare, faMinusSquare } from '@fortawesome/free-solid-svg-icons'

import { SettingsContext } from '@context/SettingsProvider'
import { BookmarkLink } from '@global/types'

const EditRow = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: 1fr 2fr 40px;
  margin-bottom: 0.5em;
  grid-gap: 1em;
  justify-content: space-around;

  button {
    align-items: grid-column-end;
  }
`

const Button = styled.button`
  cursor: pointer;
  background: none;
  border: none;
  color: gainsboro;
  font-size: 24px;
`

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

  const updateLabel = (label: string, url: string) => {
    const b = bookmarks

    const b1 = b?.filter((f: BookmarkLink) => f.url !== url)
    const b2 = b?.find((f: BookmarkLink) => f.url === url)

    b2.label = label

    setSetting('bookmarks', [...b1, b2])
  }

  const updateUrl = (label: string, url: string) => {
    const b = bookmarks

    const b1 = b?.filter((f: BookmarkLink) => f.label !== label)
    const b2 = b?.find((f: BookmarkLink) => f.label === label)

    b2.url = url

    setSetting('bookmarks', [...b1, b2])
  }

  return (
    <>
      <label>Bookmarks</label>
      <EditRow>
        <input
          type="text"
          value={label}
          placeholder="Enter a label for this bookmark"
          onChange={e => setLabel(e.target.value)}
        />
        <input
          type="text"
          value={url}
          placeholder="https://www.google.com"
          onChange={e => setUrl(e.target.value)}
        />
        <Button onClick={() => addBookmark()}>
          <FontAwesomeIcon icon={faPlusSquare} color="#2ecc71" />
        </Button>
      </EditRow>
      {bookmarks?.map((bookmark: BookmarkLink, key: number) => (
        <EditRow key={key}>
          <input
            type="text"
            defaultValue={bookmark.label}
            onChange={e => updateLabel(e.target.value, bookmark.url)}
          />
          <input
            type="text"
            defaultValue={bookmark.url}
            onChange={e => updateUrl(bookmark.label, e.target.value)}
          />
          <Button onClick={() => removeBookmark(bookmark.label, bookmark.url)}>
            <FontAwesomeIcon icon={faMinusSquare} color="#e74c3c" />
          </Button>
        </EditRow>
      ))}
    </>
  )
}

export default Bookmarks
