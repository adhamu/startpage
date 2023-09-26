import { useContext, useEffect, useState } from 'react'

import axios from 'axios'

import styled from '@emotion/styled'

import { SettingsContext } from '../context/SettingsProvider'

const Style = styled.div`
  margin-bottom: 1em;
  float: right;
  line-height: 1em;
`

const Temp = styled.span`
  color: ${props => props.theme.colors.highlight};
`

const Weather = () => {
  const {
    settings: { weather = false },
  } = useContext(SettingsContext)
  const [location, setLocation] = useState({
    longitude: 0,
    latitude: 0,
  })
  const [conditions, setConditions] = useState({
    main: null,
    description: null,
    temperature: 0,
    location: null,
    icon: '',
  })

  useEffect(() => {
    if (weather) {
      navigator.geolocation.getCurrentPosition(r => {
        setLocation({
          longitude: r.coords.longitude,
          latitude: r.coords.latitude,
        })
      })
    }
  }, [weather])

  useEffect(() => {
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
    <Style>
      {conditions.description}. Currently{' '}
      <Temp>{conditions.temperature}&deg;</Temp> in {conditions.location}
    </Style>
  )
}

export default Weather
