import { useContext, useState } from 'react'

import styled from '@emotion/styled'
import { faLink } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import type { BookmarkLink } from '../types'

import { SettingsContext } from '../context/SettingsProvider'

const Style = styled.a`
  color: ${props => props.theme.colors.body};
  font-weight: 700;
  text-align: left;
  text-decoration: none;

  &:hover {
    color: ${props => props.theme.colors.highlight};
  }
`

const Icon = styled.img`
  display: inline-block;
  width: 16px;
  height: 16px;
  margin-right: 0.5em;
  line-height: 1.6;
  vertical-align: middle;
`

const PlaceholderContainer = styled.div`
  display: inline-block;
  width: 16px;
  height: 16px;
  margin-right: 0.5em;
  color: ${props => props.theme.colors.body};
  line-height: 1.6;

  svg {
    font-size: 1rem;
  }
`

type Props = {
  bookmark: BookmarkLink
}

const Bookmark = ({ bookmark }: Props) => {
  const [error, setError] = useState(false)
  const {
    settings: { showFavicons = true },
  } = useContext(SettingsContext)

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
