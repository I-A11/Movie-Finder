import React from "react";
import Movie from "./components/Movie";
import Navbar from "./components/navbar/navbar";
import Hero from "./components/sections/Hero";

function App() {
  const movies = ["1", "2", "3"];
  return (
    <div className='App'>
      <Navbar />
      <Hero />
      {movies.map((movie) => (
        <Movie />
      ))}
    </div>
  );
}

export default App;
