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

## Technology Stack

- Typescript
- IndexedDB
- React
- Emotion Styled Components

## Tooling

- ESLint
- Prettier
- Webpack

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

Open up [http://localhost:3000](http://localhost:3000)

## Building for production

```sh
$ yarn build
```

This will output everything to the `/dist` directory which is where you would point your webserver to. Alternatively, you could host this with Netlify or Github Pages

## Linting

```sh
$ yarn lint
```
