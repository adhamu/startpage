export type SearchEngine = {
  label: string
  url: string
  suggestions: string
}

export type BookmarkLink = {
  id: number
  label: string
  url: string
  icon?: string | null
  category?: string
}

export type BookmarkLinks = BookmarkLink[]
