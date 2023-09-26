export interface SearchEngine {
  label: string
  url: string
  suggestions: string
}

export interface BookmarkLink {
  id: number
  label: string
  url: string
  icon?: string | null
  category?: string
}
