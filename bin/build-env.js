const fs = require('fs')

const ENV = './.env'

if (!fs.existsSync(ENV)) {
  fs.writeFileSync(
    ENV,
    `OPEN_WEATHER_API_KEY=${process.env.OPEN_WEATHER_API_KEY}\n`
  )
}
