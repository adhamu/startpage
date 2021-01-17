import * as React from 'react'
import styled from '@emotion/styled'

import { SettingsContext } from '@context/SettingsProvider'
import { BookmarkLink, BookmarkLinks } from '@global/types'
import Bookmark from './Bookmark'

const Bookmarks = styled.div`
  padding: 2em 0;
`

const Categories = styled.div`
  display: grid;
  grid-template-columns: 150px repeat(auto-fit, minmax(150px, 1fr));
  padding: 1em 0;
`

const CategoryLabel = styled.div`
  text-transform: uppercase;
  font-weight: 700;
  font-size: 13px;
  color: ${props => props.theme.colors.highlight};
  text-overflow: ellipsis;
  overflow: hidden;
`

const Links = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
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

const mapItems = (bookmarks: BookmarkLinks) =>
  bookmarks
    ?.sort((a: BookmarkLink, b: BookmarkLink) => a.label.localeCompare(b.label))
    .map((bookmark: BookmarkLink, key: number) => (
      <Bookmark key={key} bookmark={bookmark} />
    ))

export default (): JSX.Element => {
  const {
    settings: { bookmarks },
  } = React.useContext(SettingsContext)

  if (!bookmarks) {
    return null
  }

  const categories = getUniqueCategories(bookmarks)
  const withoutCategories = bookmarks?.filter((f: BookmarkLink) => !f.category)

  return (
    <Bookmarks>
      {categories.map((category, key) => (
        <Categories key={key}>
          <CategoryLabel>{category}</CategoryLabel>
          <Links>
            {mapItems(
              bookmarks?.filter((f: BookmarkLink) => f.category === category)
            )}
          </Links>
        </Categories>
      ))}
      {categories.length && withoutCategories.length ? (
        <Categories>
          <CategoryLabel>Other</CategoryLabel>
          <Links>{mapItems(withoutCategories)}</Links>
        </Categories>
      ) : (
        <Links>{mapItems(withoutCategories)}</Links>
      )}
    </Bookmarks>
  )
}
