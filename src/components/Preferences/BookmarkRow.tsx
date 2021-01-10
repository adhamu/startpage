import * as React from 'react'
import styled from '@emotion/styled'

import TextInput from '@preferences/TextInput'
import { BookmarkLink } from '@global/types'
import { SettingsContext } from '@context/SettingsProvider'

const BookmarkRow = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: 1fr 2fr 100px;
  margin-bottom: 0.5em;
  grid-gap: 0.5em;
  justify-content: space-between;
`

const Button = styled.button<{ isDisabled?: boolean }>`
  cursor: pointer;
  background: none;
  border: none;
  text-transform: uppercase;
  font-weight: 700;
  width: 100px;
  background: ${props => props.theme.colors.highlight};
  color: ${props => props.theme.colors.background};
  padding: 10px 10px;
  font-size: 12px;

  ${props =>
    props.isDisabled
      ? `
      cursor: not-allowed;
      background-color: ${props.theme.colors.background};
      border: 1px solid ${props.theme.colors.border};
      color: ${props.theme.colors.border};
    `
      : ''}

  &:hover {
    opacity: 0.6;
  }
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
      if (bookmarks !== undefined) {
        setSetting('bookmarks', [...bookmarks, { id: Date.now(), label, url }])
      } else {
        setSetting('bookmarks', [{ id: Date.now(), label, url }])
      }
      setLabel('')
      setUrl('')
    }
  }

  const updateBookmark = (id: number) => {
    const b = bookmarks
    const i = bookmarks.findIndex((c: BookmarkLink) => c.id === id)
    b[i] = { label, url }

    setSetting('bookmarks', b)
    setMode('remove')
  }

  const removeBookmark = (id: number) => {
    setSetting(
      'bookmarks',
      bookmarks?.filter((f: BookmarkLink) => f.id !== id)
    )
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
        <Button onClick={() => updateBookmark(bookmark.id)}>Update</Button>
      )}
      {mode === 'remove' && (
        <Button onClick={() => removeBookmark(bookmark.id)}>Remove</Button>
      )}
      {mode === 'add' && (
        <Button
          onClick={addBookmark}
          isDisabled={isExists() || !validateLabel() || !validateUrl()}>
          Add
        </Button>
      )}
    </BookmarkRow>
  )
}
