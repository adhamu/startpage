export type Theme = {
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

export default (isDark: boolean): Theme => {
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
      heading: '#000',
      tertiary: '#000',
    },
  }
}
