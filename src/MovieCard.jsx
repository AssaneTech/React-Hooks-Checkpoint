import React from 'react';
import { Link } from 'react-router-dom';

function MovieCard({ movie }) {
  return (
    <Link to={`/movie/${movie.title}`} style={{ textDecoration: 'none', color: 'inherit' }}>
      <div className="movie-card">
        <img src={movie.posterURL} alt={movie.title} width="200" />
        <h2>{movie.title}</h2>
        <p>{movie.description}</p>
        <p>⭐ {movie.rating}</p>
      </div>
    </Link>
  );
}

export default MovieCard;
