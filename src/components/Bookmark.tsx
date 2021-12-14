import * as React from 'react'

import styled from '@emotion/styled'
import { faLink } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import type { BookmarkLink } from '../types'

import { SettingsContext } from '../context/SettingsProvider'

const Style = styled.a`
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
  width: 16px;
  height: 16px;
  margin-right: 0.5em;
`

const PlaceholderContainer = styled.div`
  display: inline-block;
  margin-right: 0.5em;
  line-height: 16px;
  width: 16px;
  height: 16px;
  color: ${props => props.theme.colors.body};

  svg {
    font-size: 16px;
  }
`

type Props = {
  bookmark: BookmarkLink
}

const Bookmark = ({ bookmark }: Props): JSX.Element => {
  const [error, setError] = React.useState(false)
  const {
    settings: { showFavicons = true },
  } = React.useContext(SettingsContext)

  return (
    <Style href={bookmark.url} key={bookmark.id}>
      {showFavicons && bookmark?.icon && !error && (
        <Icon src={bookmark?.icon} onError={() => setError(true)} />
      )}
      {showFavicons && (!bookmark?.icon || error === true) && (
        <PlaceholderContainer>
          <FontAwesomeIcon icon={faLink} fixedWidth />
        </PlaceholderContainer>
      )}{' '}
      {bookmark.label}
    </Style>
  )
}

export default Bookmark
