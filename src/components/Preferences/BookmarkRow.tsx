import * as React from 'react'
import styled from '@emotion/styled'
import axios from 'axios'

import TextInput from './TextInput'
import Button from './Button'
import { BookmarkLink } from '../../types'
import { SettingsContext } from '../../context/SettingsProvider'

const BookmarkRow = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: 1fr 1fr 1fr 100px;
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
  const [category, setCategory] = React.useState(bookmark?.category ?? '')
  const [mode, setMode] = React.useState('remove')

  const {
    settings: { bookmarks },
    setSetting,
  } = React.useContext(SettingsContext)

  const determineMode = () => {
    if (!bookmark) {
      setMode('add')
    } else if (
      bookmark?.label !== label ||
      bookmark?.url !== url ||
      (bookmark?.category && bookmark?.category !== category) ||
      (!bookmark?.category && category !== '')
    ) {
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

  const addBookmark = async () => {
    if (label && url && !isExists()) {
      const icon = await getFavicon(url)
      const newBookmark = { id: Date.now(), label, url, icon, category }

      if (bookmarks !== undefined) {
        setSetting('bookmarks', [...bookmarks, newBookmark])
      } else {
        setSetting('bookmarks', [newBookmark])
      }

      setLabel('')
      setUrl('')
      setCategory('')
    }
  }

  const getFavicon = async (url: string): Promise<string> => {
    try {
      const {
        data: { icons },
      } = await axios.get(
        `https://favicongrabber.com/api/grab/${new URL(url).hostname}`,
        { headers: { 'User-Agent': 'Mozilla/5.0' } }
      )

      return (
        icons.find((f: { sizes: string }) => f.sizes === '32x32')?.src ||
        icons.find((f: { type: string }) => f.type === 'image/x-icon')?.src ||
        icons[0].src
      )
    } catch {
      return null
    }
  }

  const updateBookmark = () => {
    const b = bookmarks
    const i = bookmarks.findIndex((c: BookmarkLink) => c.id === bookmark.id)
    b[i] = { ...b[i], label, url, category }

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

  const onEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      switch (mode) {
        case 'update':
          updateBookmark()
          break
        case 'remove':
          removeBookmark()
          break
        case 'add':
          addBookmark()
          break
      }
    }
  }

  React.useEffect(() => {
    determineMode()
  }, [url, label, category])

  return (
    <BookmarkRow>
      <TextInput
        placeholder="Enter a label for this bookmark"
        value={label}
        onChange={e => setLabel(e.target.value)}
        onKeyDown={e => onEnter(e)}
      />
      <TextInput
        placeholder="https://www.google.com"
        value={url}
        onChange={e => setUrl(e.target.value)}
        onKeyDown={e => onEnter(e)}
      />
      <TextInput
        placeholder="Enter a category name"
        value={category}
        onChange={e => setCategory(e.target.value)}
        onKeyDown={e => onEnter(e)}
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
