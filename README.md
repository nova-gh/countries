# Countries Crowd

Learn about the countries around the world.

## Demo

[Live](https://countries-crowd.vercel.app)

## Features

- Light/dark mode toggle with React useContext
- Cross platform
- Search country by name
- Filter country by region

## Tech Stack

**Front-End:** Next.js, TailwindCSS

**Back-End:** Redis

## API Reference

#### Get all countries

```http
  GET https://restcountries.com/v3.1/all
```

#### Get a signle country

```http
  GET https://restcountries.com/v3.1/alpha/${cca2}
```

| Parameter | Type     | Description                 |
| :-------- | :------- | :-------------------------- |
| `{cca2}`  | `string` | Two letter ISO country code |

.

## Documentation

[Countries API](https://restcountries.com/)
[Next.js](https://nextjs.org)

[TailwindCSS](https://tailwindcss.com)

[React-Leaflet](https://react-leaflet.js.org/docs/)

[i18n-iso-countries](https://www.npmjs.com/package/i18n-iso-countries)

## Author

- Website - [Nova Gh.](https://novagh.com)
- Twitter - [@novaagh](https://www.twitter.com/novaagh)
