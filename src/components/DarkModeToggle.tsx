import * as React from 'react'
import styled from '@emotion/styled'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons'

const DarkModeToggle = styled.div`
  position: absolute;
  left: 1em;
  top: 1em;

  label {
    display: inline-block;
    font-size: 16px;
    width: 2.8em;
    height: 1.25em;
    background: ${props => props.theme.colors.heading};
    border-radius: 1em;
    position: relative;
    padding: 2px;
    cursor: pointer;

    svg {
      position: absolute;
      z-index: 0;
      top: 5px;
      font-size: 14px;
      color: ${props => props.theme.colors.background};

      &.dark {
        left: 3px;
      }

      &.light {
        right: 3px;
      }
    }

    input {
      position: absolute;
      opacity: 0;

      &:checked + div {
        -webkit-transform: translate3d(1.45em, 0, 0);
        -moz-transform: translate3d(1.45em, 0, 0);
        transform: translate3d(1.45em, 0, 0);
      }
    }

    div {
      top: 1px;
      left: 2px;
      height: 1.1em;
      width: 1.1em;
      border-radius: 1em;
      background: ${props => props.theme.colors.background};
      -webkit-transition: all 300ms;
      -moz-transition: all 300ms;
      transition: all 300ms;
      z-index: 1;
      position: relative;
    }
  }
`

type Props = {
  isDarkMode: boolean
  toggleDarkMode: () => void
}

export default ({ isDarkMode, toggleDarkMode }: Props): JSX.Element => (
  <DarkModeToggle>
    <label>
      <FontAwesomeIcon className="dark" icon={faMoon} fixedWidth={true} />
      <FontAwesomeIcon className="light" icon={faSun} fixedWidth={true} />
      <input
        type="checkbox"
        checked={isDarkMode}
        onChange={() => toggleDarkMode()}
      />
      <div></div>
    </label>
  </DarkModeToggle>
)
