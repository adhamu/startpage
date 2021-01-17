import * as React from 'react'
import styled from '@emotion/styled'

import Wrapper from '@global/Wrapper'
import SettingsProvider from '@context/SettingsProvider'
import Search from '@components/Search'
import Bookmarks from '@components/Bookmarks'
import Greeting from '@components/Greeting'
import DateTime from '@components/DateTime'
import Preferences from '@global/components/Preferences'
import Menu from '@components/Menu'
import axios from 'axios'

const Layout = styled.div`
  max-width: 960px;
  margin: 8em auto;
  padding: 0 1em;
`

const Main = styled.div<{ menuOpen: boolean }>`
  display: ${props => (props.menuOpen ? 'none' : 'block')};
`

const App = (): JSX.Element => {
  const [menuOpen, setMenuOpen] = React.useState(false)
  const [location, setLocation] = React.useState(null)

  React.useEffect(() => {
    navigator.geolocation.getCurrentPosition(r => {
      setLocation({
        longitude: r.coords.longitude,
        latitude: r.coords.latitude,
      })
    })
  }, [])

  React.useEffect(() => {
    if (location !== null) {
      ;(async () => {
        const { data } = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?lon=${location.longitude}&lat=${location.latitude}&appid=${process.env.OPEN_WEATHER_API_KEY}`
        )

        console.log(data)
      })()
    }
  }, [location])

  return (
    <SettingsProvider>
      <Wrapper>
        <Menu menuOpen={menuOpen} onClick={() => setMenuOpen(!menuOpen)} />
        <Layout>
          <DateTime />
          <Main menuOpen={menuOpen}>
            <Greeting />
            <Search />
            <Bookmarks />
          </Main>
          <Preferences menuOpen={menuOpen} />
        </Layout>
      </Wrapper>
    </SettingsProvider>
  )
}
export default App
