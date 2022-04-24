import styled from '@emotion/styled'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Style = styled.h1`
  position: absolute;
  right: 1em;
  bottom: 0;
  color: ${props => props.theme.colors.highlight};

  svg {
    font-size: 1rem;
  }
`

const Loading = (): JSX.Element => (
  <Style>
    <FontAwesomeIcon icon={faSpinner} spin fixedWidth />
  </Style>
)

export default Loading
