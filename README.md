# my-movie-app

This is a React application built with TypeScript and Vite. The application allows users to browse and view details of movies from a movie database API.

## Features

- Browse a carousel of movie posters on the home page.
- View details of a specific movie, including the movie's title, overview, release date, rating, and language.
- Add movies to a wishlist.

## Technologies Used

- React: A JavaScript library for building user interfaces.
- TypeScript: A typed superset of JavaScript that compiles to plain JavaScript.
- Vite: A build tool that provides fast development server and build tooling for modern web applications.
- React Router: A library for routing in React applications.
- Axios: A promise-based HTTP client for making API requests.
- Cross-fetch: A library that provides a Promise-based API for making HTTP requests using the Fetch API.
- slick-carousel: A carousel library for displaying multiple items in a slideshow format.
- eslint: A tool for identifying and reporting on patterns found in ECMAScript/JavaScript code.
- eslint-config-prettier: A configuration for ESLint that disables all rules that are unnecessary or might conflict with Prettier.
- eslint-plugin-react: A set of ESLint rules for React.
- eslint-plugin-react-hooks: A set of ESLint rules for React Hooks.
- eslint-plugin-react-refresh: A set of ESLint rules for React Refresh.
- typescript-eslint: A set of TypeScript type definitions for ESLint.
- @types/react-slick: Type definitions for the React Slick carousel library.

## Installation

To run this application locally, follow these steps:

1. Clone the repository: `git clone https://github.com/your-username/my-movie-app.git`.
2. Install the dependencies: `npm install`.
3. Start the development server: `npm run dev`.
4. Open the application in your browser: `http://localhost:5173`.

### Environment Variables

To run this application locally, you'll need to set the following environment variable:

VITE_TMDB_API_KEY= Your API KEY 

### API

This project uses TheMovieDatabase (TMDb) API
to fetch movie data such as popular, top-rated, and upcoming movies.

To use the API:

1. Sign up for a free TMDb account.

2. Go to your API settings and generate an API key.

3. Create a .env file in the project root and add your key:

VITE_TMDB_API_KEY=your_api_key_here


The app automatically uses this key to fetch movie data.

You can also replace TMDb with any open film API of your choice if you prefer.

## Contributing

Contributions are welcome!.

## License

This project is licensed under the [MIT License](LICENSE).
© 2025 Himanshu Pandey. All rights reserved.
