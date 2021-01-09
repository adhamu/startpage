import * as React from 'react'
import styled from '@emotion/styled'

import { SettingsContext } from '@context/SettingsProvider'
import { BookmarkLink } from '@global/types'
import TextInput from '@preferences/TextInput'

const EditRow = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: 1fr 2fr 100px;
  margin-bottom: 0.5em;
  grid-gap: 2em;
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
      background-color: ${props.theme.colors.border};
    `
      : ''}

  &:hover {
    opacity: 0.6;
  }
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
        setSetting('bookmarks', [...bookmarks, { id: Date.now(), label, url }])
      } else {
        setSetting('bookmarks', [{ id: Date.now(), label, url }])
      }
      setLabel('')
      setUrl('')
    }
  }

  const removeBookmark = (id: number) => {
    setSetting(
      'bookmarks',
      bookmarks?.filter((f: BookmarkLink) => f.id !== id)
    )
  }

  const updateBookmark = (id: number, key: 'label' | 'url', value: string) => {
    const b = bookmarks
    const i = bookmarks.findIndex((c: BookmarkLink) => c.id === id)
    b[i][key] = value

    setSetting('bookmarks', b)
  }

  const validateUrl = (url: string) => {
    try {
      new URL(url)
      return true
    } catch {
      return false
    }
  }

  return (
    <>
      <label>Bookmarks</label>
      <EditRow>
        <TextInput
          value={label}
          placeholder="Enter a label for this bookmark"
          onChange={e => setLabel(e.target.value)}
        />
        <TextInput
          value={url}
          placeholder="https://www.google.com"
          onChange={e => setUrl(e.target.value)}
        />
        <Button onClick={() => addBookmark()} isDisabled={!validateUrl(url)}>
          Add
        </Button>
      </EditRow>
      {bookmarks?.map((bookmark: BookmarkLink, key: number) => (
        <EditRow key={key}>
          <TextInput
            defaultValue={bookmark.label}
            placeholder="Enter a label for this bookmark"
            onChange={e => updateBookmark(bookmark.id, 'label', e.target.value)}
          />
          <TextInput
            defaultValue={bookmark.url}
            placeholder="https://www.google.com"
            onChange={e => updateBookmark(bookmark.id, 'url', e.target.value)}
          />
          <Button onClick={() => removeBookmark(bookmark.id)}>Remove</Button>
        </EditRow>
      ))}
    </>
  )
}

export default Bookmarks
