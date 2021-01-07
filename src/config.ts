import { Store } from 'idb-keyval'

export const store = new Store('startpage', 'user-preferences')

export const searchEngines: Record<string, string> = {
  Google: 'https://www.google.co.uk/search',
  DuckDuckGo: 'https://duckduckgo.com',
  Startpage: 'https://www.startpage.com/sp/search',
}
