import React from 'react';
import MovieCard from './MovieCard';

function MovieList({ movies }) {
  return (
    <div className="movie-list">
      {movies.map((movie, i) => (
        <MovieCard key={i} movie={movie} />
      ))}
    </div>
  );
}

export default MovieList;
