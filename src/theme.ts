import type { Interpolation, Theme } from '@emotion/react'

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
    width: 'calc(100% - 1.5em)',
    background: theme.colors.border,
    color: theme.colors.body,
    border: 'none',
    borderBottom: `2px solid ${theme.colors.border}`,
    appearance: 'none',
    WebkitAppearance: 'none',
    boxShadow: 'none',
    padding: '10px 4px',
    fontSize: '18px',
    lineHeight: '28px',
    outline: 'none',
    borderRadius: 0,
  },
  'input[type="search"]': {
    width: '100%',
  },
  'input, select, button': {
    borderRadius: '4px',
  },
  'input:focus, select:focus': {
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    borderBottom: `2px solid ${theme.colors.inputFocus}`,
  },
  'a, a:visited': {
    color: theme.colors.body,
    textDecoration: 'none',
  },
  p: {
    margin: '1em 0',
  },
  small: {
    color: theme.colors.muted,
  },
})

export const getTheme = (isDark: boolean | undefined): Theme => {
  if (isDark) {
    return {
      colors: {
        background: '#162431',
        body: '#dee2e5',
        border: '#1c2d41',
        highlight: '#0bd2ff',
        inputFocus: '#af6bef',
        muted: '#999',
      },
    }
  }

  return {
    colors: {
      background: '#ffffff',
      body: '#000000',
      border: '#efefef',
      highlight: '#ff0099',
      inputFocus: '#3a3a3a',
      muted: '#999',
    },
  }
}
