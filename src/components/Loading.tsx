import * as React from 'react'

import styled from '@emotion/styled'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Style = styled.h1`
  position: absolute;
  bottom: 0;
  right: 1em;
  color: ${props => props.theme.colors.highlight};

  svg {
    font-size: 16px;
  }
`

const Loading = (): JSX.Element => (
  <Style>
    <FontAwesomeIcon icon={faSpinner} spin fixedWidth />
  </Style>
)

export default Loading
