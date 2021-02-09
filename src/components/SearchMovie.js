import React, { Fragment, useState } from "react";
import Moviecard from "./Moviecard";

const SearchMovie = (props) => {
  const [query, setQuery] = useState("");

  const [movies, setMovies] = useState([]);
  const api = ""; //enter api

  const serachm = async (e) => {
    e.preventDefault();

    const url = `https://api.themoviedb.org/3/search/movie?api_key=${api}&language=en-US&query=${query}&page=1&include_adult=false`;
    try {
      const res = await fetch(url);
      const data = await res.json();
      console.log(data.results);
      setMovies(data.results);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Fragment>
      <form className="form" onSubmit={serachm}>
        <label className="label" id="tonde" htmlFor="query">
          Movie Name
        </label>
        <input
          className="input"
          type="text"
          name="query"
          spellCheck="false"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="i.e. Jurassic Park"
        />
        <button className="button" type="submit">
          Search
        </button>
      </form>
      <div className="card-list">
        {movies
          .filter((movie) => movie.poster_path)
          .map((movie) => (
            <Moviecard movie={movie} key={movie.id} />
          ))}
      </div>
      <footer className="foot">made by &copy;gunratna more🎯</footer>
    </Fragment>
  );
};

export default SearchMovie;
