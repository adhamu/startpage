import type { SearchEngine } from './types'

export enum Engine {
  GOOGLE = 'Google',
  DUCKDUCKGO = 'DuckDuckGo',
  STARTPAGE = 'Startpage',
}

export const searchEngines: SearchEngine[] = [
  {
    label: Engine.GOOGLE,
    url: 'https://www.google.co.uk/search',
    suggestions:
      'https://suggestqueries.google.com/complete/search?client=firefox&q=',
  },
  {
    label: Engine.DUCKDUCKGO,
    url: 'https://duckduckgo.com',
    suggestions: 'https://duckduckgo.com/ac/?type=list&q=',
  },
  {
    label: Engine.STARTPAGE,
    url: 'https://www.startpage.com/sp/search',
    suggestions: 'https://www.startpage.com/suggestions?q=',
  },
]
