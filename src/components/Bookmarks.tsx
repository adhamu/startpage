import * as React from 'react'
import styled from '@emotion/styled'

import { SettingsContext } from '@global/context/SettingsProvider'
import { BookmarkLink } from '@global/types'

const Bookmarks = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: repeat(auto-fill, 180px);
  margin-top: 3em;
  grid-gap: 0.2em;
  justify-content: space-between;
`

const Bookmark = styled.div`
  text-align: left;
  color: ${props => props.theme.colors.heading};
  display: inline-block;
  padding: 0.1em 0.5em;

  a,
  a:visited {
    color: ${props => props.theme.colors.body};
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`

const Icon = styled.img`
  display: inline-block;
  vertical-align: middle;
  line-height: 16px;
  width: 16px;
  height: 16px;
  margin-right: 0.5em;
`

export default (): JSX.Element => {
  const {
    settings: { bookmarks },
  } = React.useContext(SettingsContext)

  return (
    <Bookmarks>
      {bookmarks?.map((bookmark: BookmarkLink, key: number) => (
        <Bookmark key={key}>
          <Icon src={`${new URL(bookmark.url).origin}/favicon.ico`} />
          <a href={bookmark.url} key={key}>
            {bookmark.label}
          </a>
        </Bookmark>
      ))}
    </Bookmarks>
  )
}
