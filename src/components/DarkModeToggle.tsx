import * as React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons'

import Switch from '@components/Switch'

type Props = {
  isDarkMode: boolean
  toggleDarkMode: () => void
}

export default ({ isDarkMode, toggleDarkMode }: Props): JSX.Element => (
  <Switch checked={!!isDarkMode} onChange={toggleDarkMode}>
    <FontAwesomeIcon className="dark" icon={faMoon} fixedWidth={true} />
    <FontAwesomeIcon className="light" icon={faSun} fixedWidth={true} />
  </Switch>
)
