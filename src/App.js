import React, { useState, useEffect } from "react";
import Movie from "./components/Movie";
import Navbar from "./components/navbar/navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";

//Apis
const FEATURED_API =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";

function App() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(FEATURED_API);
      const moviesR = await response.json();
      // console.log(moviesR);
      setMovies(moviesR.results);
    }
    fetchData();
  }, []);

  return (
    <div className='App'>
      <Navbar />

      <Hero
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        setMovies={setMovies}
      />

      <div className='movie-container'>
        {movies.length > 0 &&
          movies.map((movie) => <Movie key={movie.id} {...movie} />)}
      </div>

      <Footer />
    </div>
  );
}

export default App;
