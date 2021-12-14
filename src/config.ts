import { createElement } from 'react'

import type { SearchEngine } from './types'

import { DuckDuckGo, Google, Startpage } from './icons'

export const searchEngines: SearchEngine[] = [
  {
    label: 'Google',
    url: 'https://www.google.co.uk/search',
    icon: createElement(Google),
  },
  {
    label: 'DuckDuckGo',
    url: 'https://duckduckgo.com',
    icon: createElement(DuckDuckGo),
  },
  {
    label: 'Startpage',
    url: 'https://www.startpage.com/sp/search',
    icon: createElement(Startpage),
  },
]
