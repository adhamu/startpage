import * as React from 'react'

import type { BookmarkLink } from '../../types'

import { SettingsContext } from '../../context/SettingsProvider'

import BookmarkRow from './BookmarkRow'

const Bookmarks = (): JSX.Element => {
  const {
    settings: { bookmarks },
  } = React.useContext(SettingsContext)

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
