import * as React from 'react'

import { SettingsContext } from '@context/SettingsProvider'
import { BookmarkLink } from '@global/types'
import BookmarkRow from '@preferences/BookmarkRow'

const Bookmarks = (): JSX.Element => {
  const {
    settings: { bookmarks },
  } = React.useContext(SettingsContext)

  return (
    <>
      <label>Bookmarks</label>
      <BookmarkRow />
      {bookmarks?.map((bookmark: BookmarkLink, key: number) => (
        <BookmarkRow key={key} bookmark={bookmark} />
      ))}
    </>
  )
}

export default Bookmarks
