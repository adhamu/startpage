export type SearchEngine = {
  label: string
  url: string
  icon?: JSX.Element
}

export type BookmarkLink = {
  id: number
  label: string
  url: string
}

export type BookmarkLinks = BookmarkLink[]
