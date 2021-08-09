import React, { useState, useEffect } from "react";
import Movie from "./components/Movie";
import Navbar from "./components/navbar/navbar";
import Hero from "./components/sections/Hero";

//Apis
const FEATURED_API =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";

const SEARCH_API =
  "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";

function App() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(FEATURED_API);
      const moviesR = await response.json();
      console.log(moviesR);
      setMovies(moviesR.results);
    }
    fetchData();
  }, []);

  return (
    <div className='App'>
      <Navbar />
      <Hero />
      <div className='movie-container'>
        {movies.length > 0 &&
          movies.map((movie) => <Movie key={movie.id} {...movie} />)}
      </div>
    </div>
  );
}

export default App;
