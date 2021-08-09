import React, { useState, useEffect } from "react";
import Movie from "./components/Movie";
import Navbar from "./components/navbar/navbar";

//Apis
const FEATURED_API =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";

const SEARCH_API =
  "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";

function App() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(FEATURED_API);
      const moviesR = await response.json();
      console.log(moviesR);
      setMovies(moviesR.results);
    }
    fetchData();
  }, []);

  const handleOnSubmit = (e) => {
    e.preventDefault();

    async function fetchData() {
      const response = await fetch(SEARCH_API + searchTerm);
      const moviesR = await response.json();
      console.log(moviesR);
      setMovies(moviesR.results);
    }
    fetchData();
    setSearchTerm("");
  };

  const handleOnChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className='App'>
      <Navbar />
      <section className='hero'>
        <h2>Search Movies</h2>
        <form onSubmit={handleOnSubmit}>
          <input
            type='search'
            placeholder='Search'
            className='search'
            value={searchTerm}
            onChange={handleOnChange}
          />
        </form>
      </section>

      <div className='movie-container'>
        {movies.length > 0 &&
          movies.map((movie) => <Movie key={movie.id} {...movie} />)}
      </div>
    </div>
  );
}

export default App;
