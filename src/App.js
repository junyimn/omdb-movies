import logo from "./logo.svg";
import "./App.css";
import home from "./container/home/home";
import saved from "./container/saved/saved";
import React, { useState, useEffect } from "react";
import SearchBar from "./components/SearchBar/SearchBar";
import CardContainer from "./components/CardContainer/CardContainer";

function App() {
  const [movies, setMovies] = useState([]);

  const movieApi = "http://www.omdbapi.com/?apikey=b2d65ec7&s=harry-potter";

  const handleSearch = (moviesName) => {
    if (moviesName == undefined || moviesName == "") {
      fetch(movieApi)
        .then((response) => response.json())
        .then((data) => setMovies(data));
    } else
      fetch("http://www.omdbapi.com/?apikey=b2d65ec7&s=" + moviesName)
        .then((response) => response.json())
        .then((data) => setMovies(data));
  };

  useEffect(() => {
    handleSearch("");
  }, []);

  return (
    <div className="App">
      <h2>Movies</h2>
      <p>OMDB Search</p>
      <SearchBar onBlur={handleSearch} />
      <CardContainer data={movies} />
    </div>
  );
}

export default App;
