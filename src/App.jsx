// TODO: Add error handling and display error messages for failed API calls
// TODO: Implement a loading state to show a spinner during API requests
// TODO: Implement pagination or infinite scroll for movie results
// TODO: Add a favorites feature with local storage
// TODO: Improve accessibility (ARIA labels, keyboard navigation, color contrast)
// TODO: Add unit and integration tests for this component

import { useState, useEffect } from 'react'
import "./App.css"
import searchIcon from "./search.svg"
import MovieCard from './MovieCard';

const API_BASE_URL = import.meta.env.VITE_API_URL;
const API_KEY      = import.meta.env.VITE_API_KEY;


const App = () => {

  const [searchParam, setSearchParam] = useState('');
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    searchMovies('');
  }, []);

  const searchMovies = async (searchParam) => {
    const baseUrl = `${API_BASE_URL}`;
    const url = searchParam ? `${baseUrl}/autocomplete?query=${encodeURIComponent(searchParam)}` : `${baseUrl}/top250-movies`;

    const response = await fetch(url, {
      headers: {
        "x-rapidapi-key": API_KEY
      }
    });
    const data = await response.json();
    setMovies(data);
  }

  return (
    <>

      <div className="app">
        <h1>Movie List</h1>
        <div className="search">
          <input
            placeholder='search'
            value={searchParam}
            onChange={(e) => setSearchParam(e.target.value)}
          />
          <img src={searchIcon}
            alt="search"
            onClick={() => { searchMovies(searchParam) }}
          />
        </div>

        {movies?.length > 0 ?
          (<div className="container">
            {
              movies.map((movie, index) => (
                <MovieCard key={index} movie={movie} />
              ))
            }
          </div>)
          :
          (
            <div className="empty">
              <h2>No movies found</h2>
            </div>
          )
        }
      </div>

    </>
  )
}

export default App
