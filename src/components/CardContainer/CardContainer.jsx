import React from "react";
import MovieCard from "../MovieCard/MovieCard";

const CardContainer = (props) => {
  const { data } = props;

  const cardAsJSX = data.map((movies) => {
    const { year, title } = movies;
    return <MovieCard title={movies.search.title} year={movies.search.year} />;
  });

  return (
    <>
      <div>{cardAsJSX}</div>
    </>
  );
};

export default CardContainer;
