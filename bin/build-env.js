const fs = require('fs')

if (!fs.existsSync('./.env')) {
  fs.writeFileSync(
    './.env',
    `OPEN_WEATHER_API_KEY=${process.env.OPEN_WEATHER_API_KEY}\n`
  )
}
