import * as React from 'react'
import styled from '@emotion/styled'
import axios from 'axios'

import { SettingsContext } from '../context/SettingsProvider'

const Weather = styled.div`
  margin-bottom: 1em;
  line-height: 1em;
  float: right;
`

const Temp = styled.span`
  color: ${props => props.theme.colors.highlight};
`

export default (): JSX.Element => {
  const {
    settings: { weather = false },
  } = React.useContext(SettingsContext)
  const [location, setLocation] = React.useState(null)
  const [conditions, setConditions] = React.useState(null)

  React.useEffect(() => {
    if (weather) {
      navigator.geolocation.getCurrentPosition(r => {
        setLocation({
          longitude: r.coords.longitude,
          latitude: r.coords.latitude,
        })
      })
    }
  }, [weather])

  React.useEffect(() => {
    if (location !== null) {
      ;(async () => {
        const { data } = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?lon=${location.longitude}&lat=${location.latitude}&units=metric&appid=${process.env.OPEN_WEATHER_API_KEY}`
        )

        setConditions({
          location: data.name,
          main: data.weather[0].main,
          description: data.weather[0].description.replace(
            /^./,
            data.weather[0].description[0].toUpperCase()
          ),
          temperature: Math.floor(data.main.temp),
          icon: `https://openweathermap.org/img/w/${data.weather[0].icon}.png`,
        })
      })()
    }
  }, [location])

  if (!conditions || !weather) {
    return null
  }

  return (
    <Weather>
      {conditions.description}. Currently{' '}
      <Temp>{conditions.temperature}&deg;</Temp> in {conditions.location}
    </Weather>
  )
}
