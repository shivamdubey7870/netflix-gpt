import React from "react";

const MovieCard = ({ moviesImage = [] }) => {
  if (!moviesImage || moviesImage.length === 0) return null;

  return (
    <div className="flex gap-4 pl-4 overflow-x-scroll scrollbar-none">
      {moviesImage.map((item) => (
        <img
          key={item.id}
          className="mt-4 w-36 flex-shrink-0 rounded-lg"
          src={`https://image.tmdb.org/t/p/w200${item.poster_path}`}
          alt={item.title}
        />
      ))}
    </div>
  );
};

export default MovieCard;
