import styled from '@emotion/styled'

import type { ColourTheme } from './types'

export const Container = styled.div`
  position: relative;
`

export const Suggestions = styled.ul<{ colourTheme: ColourTheme }>`
  position: absolute;
  top: calc(100% - 2px);
  width: calc(100% - 4px);
  max-height: 500px;
  border: ${props =>
      props.colourTheme.borderWidth
        ? `${props.colourTheme.borderWidth}px`
        : '2px'}
    solid ${props => props.colourTheme.borderColour};
  border-top: 0;
  background: ${props => props.colourTheme.backgroundColour};
  border-bottom-left-radius: ${props =>
    props.colourTheme.borderRadius
      ? `${props.colourTheme.borderRadius}px`
      : '2px'};
  border-bottom-right-radius: ${props =>
    props.colourTheme.borderRadius
      ? `${props.colourTheme.borderRadius}px`
      : '2px'};
  font-size: 1rem;
  list-style-type: none;
  overflow-y: auto;

  li a {
    display: block;
    padding: 10px;
    color: ${props => props.colourTheme.colour};
    text-decoration: none;

    &:focus {
      border: none;
      background: ${props => props.colourTheme.activeBackgroundColour};
      box-shadow: none;
      color: ${props => props.colourTheme.activeColour};
      font-weight: bold;
      outline: none;
    }
  }
`
