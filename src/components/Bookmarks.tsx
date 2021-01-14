import * as React from 'react'
import styled from '@emotion/styled'

import { SettingsContext } from '@context/SettingsProvider'
import { BookmarkLink } from '@global/types'
import Bookmark from './Bookmark'

const Bookmarks = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: repeat(auto-fill, 180px);
  margin-top: 3em;
  grid-gap: 0.2em;
  justify-content: space-between;
`

export default (): JSX.Element => {
  const {
    settings: { bookmarks },
  } = React.useContext(SettingsContext)

  return (
    <Bookmarks>
      {bookmarks
        ?.sort((a: BookmarkLink, b: BookmarkLink) =>
          a.label.localeCompare(b.label)
        )
        .map((bookmark: BookmarkLink, key: number) => (
          <Bookmark key={key} bookmark={bookmark} />
        ))}
    </Bookmarks>
  )
}
