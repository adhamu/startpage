import * as React from 'react'
import styled from '@emotion/styled'

import TextInput from '@preferences/TextInput'
import { BookmarkLink } from '@global/types'
import { SettingsContext } from '@context/SettingsProvider'
import Button from '@preferences/Button'

const BookmarkRow = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: 1fr 2fr 100px;
  margin-bottom: 0.5em;
  grid-gap: 0.5em;
  justify-content: space-between;
`

type Props = {
  bookmark?: BookmarkLink
}

export default ({ bookmark }: Props): JSX.Element => {
  const [label, setLabel] = React.useState(bookmark?.label ?? '')
  const [url, setUrl] = React.useState(bookmark?.url ?? '')
  const [mode, setMode] = React.useState('remove')

  const {
    settings: { bookmarks },
    setSetting,
  } = React.useContext(SettingsContext)

  const determineMode = () => {
    if (!bookmark) {
      setMode('add')
    } else if (bookmark?.label !== label || bookmark?.url !== url) {
      setMode('update')
    } else {
      setMode('remove')
    }
  }

  const isExists = () => bookmarks?.find((f: BookmarkLink) => f.url === url)

  const validateLabel = () => !!label

  const validateUrl = () => {
    try {
      new URL(url)
      return true
    } catch {
      return false
    }
  }

  const addBookmark = () => {
    if (label && url && !isExists()) {
      const newBookmark = { id: Date.now(), label, url }
      if (bookmarks !== undefined) {
        setSetting('bookmarks', [...bookmarks, newBookmark])
      } else {
        setSetting('bookmarks', [newBookmark])
      }
      setLabel('')
      setUrl('')
    }
  }

  const updateBookmark = () => {
    const b = bookmarks
    const i = bookmarks.findIndex((c: BookmarkLink) => c.id === bookmark.id)
    b[i] = { ...b[i], label, url }

    setSetting('bookmarks', b)
    setMode('remove')
  }

  const removeBookmark = () => {
    setSetting(
      'bookmarks',
      bookmarks?.filter((f: BookmarkLink) => f.id !== bookmark.id)
    )
    setMode('remove')
  }

  React.useEffect(() => {
    determineMode()
  }, [url, label])

  return (
    <BookmarkRow>
      <TextInput
        placeholder="Enter a label for this bookmark"
        value={label}
        onChange={e => setLabel(e.target.value)}
      />
      <TextInput
        placeholder="https://www.google.com"
        value={url}
        onChange={e => setUrl(e.target.value)}
      />
      {mode === 'update' && (
        <Button
          disabled={!validateLabel() || !validateUrl()}
          className="warning"
          onClick={updateBookmark}>
          Update
        </Button>
      )}
      {mode === 'remove' && (
        <Button className="danger" onClick={removeBookmark}>
          Remove
        </Button>
      )}
      {mode === 'add' && (
        <Button
          onClick={addBookmark}
          className="success"
          disabled={isExists() || !validateLabel() || !validateUrl()}>
          Add
        </Button>
      )}
    </BookmarkRow>
  )
}
