import { Interpolation, Theme } from '@emotion/react'

export const globalStyles = (theme: Theme): Interpolation<Theme> => ({
  '*': {
    padding: 0,
    margin: 0,
    outline: 0,
  },
  body: {
    fontFamily: 'Source Sans Pro, sans-serif',
    fontWeight: 400,
    fontSize: '16px',
    lineHeight: '28px',
    background: theme.colors.background,
    color: theme.colors.body,
  },
  'h1, h2, h3, h4, h5': {
    marginBottom: '1em',
  },
  hr: {
    borderColor: theme.colors.border,
  },
  label: {
    display: 'block',
    fontWeight: 700,
  },
  'input, select': {
    width: '100%',
    background: 'transparent',
    color: theme.colors.body,
    border: `1px solid ${theme.colors.border}`,
    appearance: 'none',
    WebkitAppearance: 'none',
    boxShadow: 'none',
    padding: '10px 4px',
    fontSize: '18px',
    lineHeight: '28px',
    outline: 'none',
    borderRadius: 0,
  },
  'input, select, button': {
    borderRadius: '4px',
  },
  'input[type="text"]': {
    width: 'calc(100% - 0.5em - 10px)',
    padding: '10px',
  },
  'input:focus, select:focus': {
    border: `1px solid ${theme.colors.highlight}`,
  },
  'a, a:visited': {
    color: theme.colors.body,
    textDecoration: 'none',
  },
})

export default (isDark: boolean | undefined): Theme => {
  if (isDark) {
    return {
      colors: {
        background: '#162431',
        body: '#dee2e5',
        link: '#70fe35',
        border: '#3a3a3a',
        highlight: '#af6bef',
        heading: '#0bd2ff',
        tertiary: '#fe7b00',
      },
    }
  }

  return {
    colors: {
      background: '#fff',
      body: '#000',
      link: '#ff0099',
      border: '#efefef',
      highlight: '#3a3a3a',
      heading: '#ff0099',
      tertiary: '#000',
    },
  }
}
