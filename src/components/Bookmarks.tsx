import * as React from 'react'
import styled from '@emotion/styled'

import { SettingsContext } from '@context/SettingsProvider'
import { BookmarkLink, BookmarkLinks } from '@global/types'
import Bookmark from './Bookmark'

const Bookmarks = styled.div`
  margin-top: 2em;
`

const Categories = styled.div`
  margin-top: 1.5em;
  display: grid;
  grid-template-columns: 100px repeat(auto-fit, minmax(150px, 1fr));
`

const CategoryLabel = styled.div`
  text-transform: uppercase;
  font-weight: 700;
  font-size: 13px;
  color: ${props => props.theme.colors.highlight};
`

const Links = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(170px, 1fr));
  grid-gap: 0.5em;
`

const getUniqueCategories = (bookmarks: BookmarkLinks) => [
  ...new Set(
    bookmarks
      ?.map(bookmark => bookmark.category)
      .filter(Boolean)
      .sort()
  ),
]

export default (): JSX.Element => {
  const {
    settings: { bookmarks },
  } = React.useContext(SettingsContext)

  return (
    <Bookmarks>
      {getUniqueCategories(bookmarks).map((category, key) => (
        <Categories key={key}>
          <CategoryLabel>{category}</CategoryLabel>
          <Links>
            {bookmarks
              ?.filter((f: BookmarkLink) => f.category === category)
              .sort((a: BookmarkLink, b: BookmarkLink) =>
                a.label.localeCompare(b.label)
              )
              .map((bookmark: BookmarkLink, key: number) => (
                <Bookmark key={key} bookmark={bookmark} />
              ))}
          </Links>
        </Categories>
      ))}
      <Categories>
        <CategoryLabel>Other</CategoryLabel>
        <Links>
          {bookmarks
            ?.filter((f: BookmarkLink) => !f.category)
            .sort((a: BookmarkLink, b: BookmarkLink) =>
              a.label.localeCompare(b.label)
            )
            .map((bookmark: BookmarkLink, key: number) => (
              <Bookmark key={key} bookmark={bookmark} />
            ))}
        </Links>
      </Categories>
    </Bookmarks>
  )
}
