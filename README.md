# Startpage

A super simple and customisable landing page.

[![Build](https://github.com/adhamu/startpage/workflows/Node.js/badge.svg)](https://github.com/adhamu/startpage/actions)

![startpage](screens/home.png)

## Features

- Personalise with your name
- Search with [Google](https://www.google.co.uk), [DuckDuckGo](https://duckduckgo.com) or [Startpage](https://www.startpage.com)
- Dark Mode
- Customisable theme
- Bookmarks
- Weather

## Technology Stack

- Typescript
- IndexedDB
- React
- Emotion Styled Components

## Tooling

- ESLint
- Prettier
- Parcel

## Installation

```sh
$ git clone https://github.com/adhamu/startpage
$ cd startpage
$ yarn
```

## Run it locally

```sh
$ yarn dev
```

Open up [http://localhost:1234](http://localhost:1234)

## Building for production

```sh
$ yarn build
```

This will output everything to the `/dist` directory which is where you would point your webserver to. Alternatively, you could host this with Netlify or Github Pages

## Linting

```sh
$ yarn lint
```

## Weather

In order to enable the weather capibility, you need to sign up for an API key at [https://openweathermap.org](https://openweathermap.org). Once you have done that, create an `.env` file in the root of the project as follows.

```sh
$ cp .env.example .env
```

```sh
OPEN_WEATHER_API_KEY=YOUR_API_KEY
```
