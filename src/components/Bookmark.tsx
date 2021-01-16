import * as React from 'react'
import styled from '@emotion/styled'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLink } from '@fortawesome/free-solid-svg-icons'

import { BookmarkLink } from '@global/types'
import { SettingsContext } from '@global/context/SettingsProvider'

const Bookmark = styled.a`
  text-align: left;
  color: ${props => props.theme.colors.body};
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

export default ({ bookmark }: Props): JSX.Element => {
  const [error, setError] = React.useState(false)
  const {
    settings: { showFavicons },
  } = React.useContext(SettingsContext)

  return (
    <Bookmark href={bookmark.url} key={bookmark.id}>
      {showFavicons && bookmark?.icon && !error && (
        <Icon src={bookmark?.icon} onError={() => setError(true)} />
      )}
      {showFavicons && (!bookmark?.icon || error === true) && (
        <PlaceholderContainer>
          <FontAwesomeIcon icon={faLink} fixedWidth />
        </PlaceholderContainer>
      )}{' '}
      {bookmark.label}
    </Bookmark>
  )
}
