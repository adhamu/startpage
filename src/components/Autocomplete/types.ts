export type Suggestion = {
  label: string
  url: string
}

export type ColourTheme = {
  borderWidth?: number
  borderRadius?: number
  borderColour: string
  backgroundColour: string
  colour: string
  activeBackgroundColour: string
  activeColour: string
  zebra?: boolean
}

export type Props = {
  suggestions: Suggestion[]
  colourTheme: ColourTheme
  name?: string
  placeholder?: string
  autoFocus?: boolean
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}
