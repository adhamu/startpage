import * as React from 'react'
import styled from '@emotion/styled'

import { SettingsContext } from '@context/SettingsProvider'
import useTheme from '@global/hooks/useTheme'
import { matchMediaFallback } from '@global/utils'
import Button from './Button'

const ColorOptions = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 150px);
  grid-gap: 0.2em;
  justify-content: space-between;

  > div {
    display: flex;
    justify-content: space-between;

    label {
      font-weight: 400;
      width: 100%;
      margin-left: 1em;
    }
  }
`

const ResetTheme = styled(Button)`
  width: auto;
`

const ColorInput = styled.input`
  width: 60px;
  height: 30px;
  border: 1px solid ${props => props.theme.colors.border};
  padding: 0;
`

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
          Object.keys(theme.colors).map(
            (
              option:
                | 'background'
                | 'body'
                | 'border'
                | 'highlight'
                | 'inputFocus',
              key: number
            ) => (
              <div key={key}>
                <ColorInput
                  type="color"
                  value={theme.colors[option]}
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
            )
          )}
      </ColorOptions>
      <br />
      <ResetTheme
        className="danger"
        onClick={() => {
          deleteSetting(prefersDarkMode ? 'themeDark' : 'themeLight')
        }}>
        Reset theme
      </ResetTheme>
    </>
  )
}

export default Theme
