import * as React from 'react'
import styled from '@emotion/styled'

import links from '@global/links'

const Bookmarks = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: repeat(auto-fit, minmax(25%, 1fr));
  margin-top: 3em;
  grid-gap: 0.2em;
  justify-content: space-between;
`

const Bookmark = styled.div`
  text-align: left;
  color: ${props => props.theme.colors.heading};
  display: block;
  background: #18212e;
  padding: 0.1em 0.5em;

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
    {links.map((link, key: number) => (
      <Bookmark key={key}>
        <img src={`${link.url.split(/[\\/]/).pop()}/favicon.ico`} />
        <a href={link.url} key={key}>
          {link.label}
        </a>
      </Bookmark>
    ))}
  </Bookmarks>
)
