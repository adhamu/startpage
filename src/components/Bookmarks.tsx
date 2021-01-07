import * as React from 'react'
import styled from '@emotion/styled'

import links from '@global/links'
import { BookmarkLink } from '@global/types'

const Bookmarks = styled.div`
  margin-top: 3em;
  display: flex;
  justify-content: space-between;
`

const Bookmark = styled.div`
  text-align: left;
  color: ${props => props.theme.colors.heading};

  a,
  a:visited {
    color: ${props => props.theme.colors.body};
    text-decoration: none;
    display: block;

    &:hover {
      text-decoration: underline;
    }
  }
`

export default (): JSX.Element => (
  <Bookmarks>
    {Object.keys(links).map(category => (
      <Bookmark key={category}>
        <h3>{category}</h3>
        {links[category].map((link: BookmarkLink, key: number) => (
          <a href={link.url} key={key}>
            {link.label}
          </a>
        ))}
      </Bookmark>
    ))}
  </Bookmarks>
)
