import React from "react";

const SEARCH_API =
  "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";
function Hero({ searchTerm, setSearchTerm, setMovies }) {
  const handleOnSubmit = (e) => {
    e.preventDefault();

    async function fetchData() {
      const response = await fetch(SEARCH_API + searchTerm);
      const moviesR = await response.json();
      //   console.log(moviesR);
      setMovies(moviesR.results);
    }
    fetchData();
    setSearchTerm("");
  };

  const handleOnChange = (e) => {
    setSearchTerm(e.target.value);
  };
  return (
    <>
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
    </>
  );
}

export default Hero;
