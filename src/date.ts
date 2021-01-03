import { format } from 'date-fns'

const today = new Date()

export const getDate = (): string => format(today, 'iii do MMM YYY')

export const timeOfDay = (): string => {
  const hour = new Date().getHours()

  if (hour >= 5 && hour < 12) {
    return 'morning'
  } else if (hour >= 12 && hour < 17) {
    return 'afternoon'
  } else if ((hour >= 17 && hour <= 23) || hour < 5) {
    return 'evening'
  }
}
