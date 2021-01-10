import * as React from 'react'
import styled from '@emotion/styled'

import { SettingsContext } from '@context/SettingsProvider'
import { BookmarkLink } from '@global/types'

const Bookmarks = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: repeat(auto-fill, 180px);
  margin-top: 3em;
  grid-gap: 0.2em;
  justify-content: space-between;
`

const Bookmark = styled.a`
  text-align: left;
  color: ${props => props.theme.colors.body};
  padding: 0.1em 0.5em;
  text-decoration: none;
  font-weight: 700;

  &:hover {
    color: ${props => props.theme.colors.highlight};
  }
`

const Icon = styled.img`
  display: inline-block;
  vertical-align: middle;
  line-height: 16px;
  width: 24px;
  height: 24px;
  margin-right: 0.5em;
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
        .map((bookmark: BookmarkLink) => (
          <Bookmark href={bookmark.url} key={bookmark.id}>
            <Icon
              src={`https://www.google.com/s2/favicons?sz=64&domain_url=${
                new URL(bookmark.url).hostname
              }`}
            />{' '}
            {bookmark.label}
          </Bookmark>
        ))}
    </Bookmarks>
  )
}
