import * as React from 'react'
import styled from '@emotion/styled'

import links from '../links'

const Bookmarks = styled.div`
  margin-top: 3em;
  display: flex;
  justify-content: space-between;
`

const Bookmark = styled.div`
  text-align: left;

  a,
  a:visited {
    color: #ff0099;
    text-decoration: none;
    display: block;

    &:hover {
      color: #910057;
    }
  }
`

export default (): JSX.Element => (
  <Bookmarks>
    {Object.keys(links).map(category => (
      <Bookmark key={category}>
        <h3>{category}</h3>
        {links[category].map(
          (link: { url: string; name: string }, key: string | number) => (
            <a
              href={link.url}
              key={key}
              target="_blank"
              rel="noreferrer noopener">
              {link.name}
            </a>
          )
        )}
      </Bookmark>
    ))}
  </Bookmarks>
)
