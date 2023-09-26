import { useContext } from 'react'

import styled from '@emotion/styled'

import type { BookmarkLink } from '../types'

import { SettingsContext } from '../context/SettingsProvider'

import Bookmark from './Bookmark'

const Style = styled.div`
  padding: 2em 0;
`

const Categories = styled.div`
  display: grid;
  padding: 1em 0;

  @media (min-width: 767px) {
    grid-template-columns: 150px repeat(auto-fit, minmax(150px, 1fr));
  }
`

const CategoryLabel = styled.div`
  overflow: hidden;
  color: ${props => props.theme.colors.highlight};
  font-size: 0.8rem;
  font-weight: 700;
  text-overflow: ellipsis;
  text-transform: uppercase;
`

const Links = styled.div`
  display: grid;
  grid-gap: 0;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
`

const getUniqueCategories = (bookmarks: BookmarkLink[]) => [
  ...new Set(
    bookmarks
      ?.map(bookmark => bookmark.category)
      .filter(Boolean)
      .sort()
  ),
]

const mapItems = (bookmarks: BookmarkLink[]) =>
  bookmarks
    ?.sort((a: BookmarkLink, b: BookmarkLink) => a.label.localeCompare(b.label))
    .map((bookmark: BookmarkLink) => (
      <Bookmark key={bookmark.url} bookmark={bookmark} />
    ))

const Bookmarks = () => {
  const {
    settings: { bookmarks },
  } = useContext(SettingsContext)

  if (!bookmarks) {
    return null
  }

  const categories = getUniqueCategories(bookmarks)
  const withoutCategories = bookmarks?.filter((f: BookmarkLink) => !f.category)

  return (
    <Style>
      {categories.map(category => (
        <Categories key={category}>
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
    </Style>
  )
}

export default Bookmarks
