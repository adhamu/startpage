import * as React from 'react'
import styled from '@emotion/styled'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLink } from '@fortawesome/free-solid-svg-icons'

import { BookmarkLink } from '@global/types'

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
  vertical-align: middle;
  line-height: 16px;
  display: inline-block;
  width: 24px;
  height: 24px;
  margin-right: 0.5em;
`

const PlaceholderContainer = styled.div`
  display: inline-block;
  margin-right: 0.5em;
  line-height: 16px;
  width: 24px;
  height: 24px;
  color: ${props => props.theme.colors.body};
`

type Props = {
  bookmark: BookmarkLink
}

const getFavicon = (url: string) => {
  const parseUrl = new URL(url)
  const urlParts = parseUrl.hostname.split('.')

  const domain = urlParts
    .slice(0)
    .slice(-(urlParts.length === 4 ? 3 : 2))
    .join('.')

  return `${parseUrl.protocol}//${domain}/favicon.ico`
}

export default ({ bookmark }: Props): JSX.Element => {
  const [error, setError] = React.useState(false)

  return (
    <Bookmark href={bookmark.url} key={bookmark.id}>
      {!error && (
        <Icon src={getFavicon(bookmark.url)} onError={() => setError(true)} />
      )}
      {error === true && (
        <PlaceholderContainer>
          <FontAwesomeIcon icon={faLink} fixedWidth />
        </PlaceholderContainer>
      )}{' '}
      {bookmark.label}
    </Bookmark>
  )
}
