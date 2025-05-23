# Movie List React App

A simple React application to search and display movies using the IMDB API via RapidAPI.

## Features

- Search for movies by title
- View top 250 movies
- Responsive and modern UI

## Demo

> _Add a link to your deployed app here if available_

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v16 or higher recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Setup

1. **Clone the repository:**

   ```powershell
   git clone https://github.com/mojtaba2021/movie-list.git
   cd MovieList
   ```

2. **Install dependencies:**

   ```powershell
   npm install
   # or
   yarn install
   ```

3. **Configure environment variables:**

   - Copy `.env.example` to `.env`:

     ```powershell
     copy .env.example .env
     ```

   - Get your API key from [RapidAPI IMDB236](https://rapidapi.com/octopusteam-octopusteam-default/api/imdb236)
   - Fill in your API key and API URL in the `.env` file:

     ```properties
     VITE_API_URL=https://imdb236.p.rapidapi.com/api/imdb
     VITE_API_KEY=your_rapidapi_key_here
     ```

### Running the App

- **Development mode:**

  ```powershell
  npm run dev
  # or
  yarn dev
  ```

  The app will be available at [http://localhost:5173](http://localhost:5173).

- **Production build:**

  ```powershell
  npm run build
  # or
  yarn build
  ```

  To preview the production build locally:

  ```powershell
  npm run preview
  # or
  yarn preview
  ```

## Environment Variables

- `VITE_API_URL` — The base URL for the IMDB API (e.g., `https://imdb236.p.rapidapi.com/api/imdb`)
- `VITE_API_KEY` — Your RapidAPI key for authentication

**Note:**  
Never commit your real `.env` files to version control. Use `.env.example` for sharing required variable names.

## Project Structure

```
src/
  App.jsx
  MovieCard.jsx
  App.css
  main.jsx
  search.svg
  assets/
public/
```

## Deployment

You can deploy the production build to any static hosting service (e.g., Vercel, Netlify, GitHub Pages).  
Make sure to set the environment variables in your deployment settings.

## License

MIT

---

**Made with ❤️ using React and Vite**