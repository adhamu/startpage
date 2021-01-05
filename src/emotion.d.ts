import '@emotion/react'

declare module '@emotion/react' {
  export interface Theme {
    colors: {
      background: string
      body: string
      link: string
      border: string
      highlight: string
      heading: string
      tertiary: string
    }
  }
}
