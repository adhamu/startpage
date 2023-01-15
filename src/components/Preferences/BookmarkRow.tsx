import * as React from 'react'

import axios from 'axios'

import styled from '@emotion/styled'

import type { BookmarkLink } from '../../types'

import { SettingsContext } from '../../context/SettingsProvider'

import Button from './Button'
import TextInput from './TextInput'

const Style = styled.div`
  display: grid;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.5em;
  grid-gap: 0.5em;
  grid-template-columns: 1fr;

  > button:last-of-type {
    margin-bottom: 2em;
  }

  @media (min-width: 768px) {
    margin-bottom: 0.5em;
    grid-gap: 0.5em;
    grid-template-columns: 1fr 1fr 1fr 100px;

    > button:last-of-type {
      margin-bottom: 0;
    }
  }
`

type Props = {
  bookmark?: BookmarkLink
}

const BookmarkRow = ({ bookmark }: Props): JSX.Element => {
  const [label, setLabel] = React.useState(bookmark?.label ?? '')
  const [url, setUrl] = React.useState(bookmark?.url ?? '')
  const [category, setCategory] = React.useState(bookmark?.category ?? '')
  const [mode, setMode] = React.useState('remove')

  const {
    settings: { bookmarks },
    setSetting,
  } = React.useContext(SettingsContext)

  const isExists = () => !!bookmarks?.find((f: BookmarkLink) => f.url === url)

  const validateLabel = () => !!label

  const validateUrl = () => {
    try {
      return Boolean(new URL(url))
    } catch {
      return false
    }
  }

  const getFavicon = async (uri: string): Promise<string | null> => {
    try {
      const { data } = await axios.get(
        `/.netlify/functions/getFavicon?domain=${new URL(uri).hostname}`
      )

      return data
    } catch {
      return null
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

  const updateBookmark = () => {
    const b = bookmarks || []
    const i =
      bookmarks?.findIndex((c: BookmarkLink) => c.id === bookmark?.id) || 0
    b[i as number] = {
      ...b[i as number],
      label,
      url,
      category,
    }

    setSetting('bookmarks', b)
    setMode('remove')
  }

  const removeBookmark = () => {
    setSetting(
      'bookmarks',
      bookmarks?.filter((f: BookmarkLink) => f.id !== bookmark?.id)
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
        default:
          addBookmark()
          break
      }
    }
  }

  React.useEffect(() => {
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

    determineMode()
  }, [url, label, category, bookmark])

  return (
    <Style>
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
          onClick={updateBookmark}
        >
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
          disabled={isExists() || !validateLabel() || !validateUrl()}
        >
          Add
        </Button>
      )}
    </Style>
  )
}

export default BookmarkRow
