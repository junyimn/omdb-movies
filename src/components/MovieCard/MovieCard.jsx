import React from "react";

const MovieCard = (props) => {
  const { title, year } = props;
  return (
    <div>
      <h2>{title}</h2>
      <p> {year}</p>
    </div>
  );
};

export default MovieCard;
