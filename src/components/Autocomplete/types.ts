export type Suggestion = {
  label: string
  url: string
}

export type Props = {
  suggestions: Suggestion[]
  className?: string
  name?: string
  placeholder?: string
  autoFocus?: boolean
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}
