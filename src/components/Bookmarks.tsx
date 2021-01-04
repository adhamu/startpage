import * as React from 'react'
import styled from '@emotion/styled'
import { Theme } from '@global/theme'

import links from '../links'

const Bookmarks = styled.div`
  margin-top: 3em;
  display: flex;
  justify-content: space-between;
`

const Bookmark = styled.div<{ theme: Theme }>`
  text-align: left;
  color: ${props => props.theme.colors.heading};

  a,
  a:visited {
    color: ${props => props.theme.colors.link};
    text-decoration: none;
    display: block;

    &:hover {
      text-decoration: underline;
    }
  }
`

export default ({ theme }: { theme: Theme }): JSX.Element => (
  <Bookmarks>
    {Object.keys(links).map(category => (
      <Bookmark key={category} theme={theme}>
        <h3>{category}</h3>
        {links[category].map(
          (link: { url: string; name: string }, key: string | number) => (
            <a href={link.url} key={key}>
              {link.name}
            </a>
          )
        )}
      </Bookmark>
    ))}
  </Bookmarks>
)
