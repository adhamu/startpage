import * as React from 'react'
import styled from '@emotion/styled'

import links from '@global/links'

const Bookmarks = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: repeat(auto-fit, minmax(20%, 1fr));
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

export default (): JSX.Element => (
  <Bookmarks>
    {links.map((link, key) => (
      <Bookmark key={key}>
        <Icon src={`${new URL(link.url).origin}/favicon.ico`} />
        <a href={link.url} key={key}>
          {link.label}
        </a>
      </Bookmark>
    ))}
  </Bookmarks>
)
