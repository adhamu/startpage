import { useContext } from 'react'

import BookmarkRow from './BookmarkRow'
import { SettingsContext } from '../../context/SettingsProvider'

import type { BookmarkLink } from '../../types'

const Bookmarks = () => {
  const {
    settings: { bookmarks },
  } = useContext(SettingsContext)

  return (
    <>
      <label>Bookmarks</label>
      <BookmarkRow />
      {bookmarks
        ?.sort((a: BookmarkLink, b: BookmarkLink) =>
          a.label.localeCompare(b.label)
        )
        .map((bookmark: BookmarkLink) => (
          <BookmarkRow key={bookmark.id} bookmark={bookmark} />
        ))}
    </>
  )
}

export default Bookmarks
