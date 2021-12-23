import * as React from 'react'

import styled from '@emotion/styled'

import { SettingsContext } from '../../context/SettingsProvider'
import { useTheme } from '../../hooks/useTheme'
import { matchMediaFallback } from '../../utils'
import Button from './Button'

const ColorOptions = styled.div`
  display: grid;
  justify-content: space-between;
  grid-gap: 0.2em;
  grid-template-columns: repeat(auto-fill, 150px);

  > div {
    display: flex;
    justify-content: space-between;

    label {
      width: 100%;
      margin-left: 1em;
      font-weight: 400;
    }
  }
`

const ResetTheme = styled(Button)`
  width: auto;
`

const ColorInput = styled.input`
  width: 60px;
  height: 30px;
  padding: 0;
  border: 1px solid ${props => props.theme.colors.border};
`

type AvailableOption =
  | 'background'
  | 'body'
  | 'border'
  | 'highlight'
  | 'inputFocus'

const Theme = (): JSX.Element => {
  const {
    settings: { prefersDarkMode = matchMediaFallback() },
    setSetting,
    deleteSetting,
  } = React.useContext(SettingsContext)

  const theme = useTheme()

  return (
    <>
      <label>Theme</label>
      <ColorOptions>
        {theme &&
          Object.keys(theme.colors).map((option: string) => (
            <div key={option}>
              <ColorInput
                type="color"
                value={theme.colors[option as AvailableOption]}
                onChange={e => {
                  setSetting(prefersDarkMode ? 'themeDark' : 'themeLight', {
                    colors: {
                      ...theme.colors,
                      [option]: e.target.value,
                    },
                  })
                }}
              />
              <label>{option}</label>
            </div>
          ))}
      </ColorOptions>
      <br />
      <ResetTheme
        className="danger"
        onClick={() => {
          deleteSetting(prefersDarkMode ? 'themeDark' : 'themeLight')
        }}
      >
        Reset theme
      </ResetTheme>
    </>
  )
}

export default Theme
