export type ColourTheme = {
  borderWidth?: number
  borderRadius?: number
  borderColour: string
  backgroundColour: string
  colour: string
  activeBackgroundColour: string
  activeColour: string
}

export type Props = {
  suggestions: React.ReactNode[]
  colourTheme: ColourTheme
  name?: string
  placeholder?: string
  autoFocus?: boolean
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}
