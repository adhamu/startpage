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
    font-size: 20px;
    height: 2.6em;
    width: 1.2em;
    background: #000;
    border-radius: 1em;
    position: relative;
    cursor: pointer;

    svg {
      position: absolute;
      z-index: 0;

      &.dark {
        color: #f09;
        top: 2px;
      }

      &.light {
        color: #ff0;
        bottom: 4px;
      }
    }

    input {
      position: absolute;
      opacity: 0;

      &:checked + div {
        -webkit-transform: translate3d(0, 1.3em, 0);
        -moz-transform: translate3d(0, 1.3em, 0);
        transform: translate3d(0, 1.3em, 0);
      }
    }

    div {
      top: 1px;
      left: 1px;
      height: 1.1em;
      width: 1.1em;
      border-radius: 1em;
      background: #fff;
      box-shadow: 0 0.1em 0.3em rgba(0, 0, 0, 0.3);
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
