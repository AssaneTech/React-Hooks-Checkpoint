import React from 'react';
import { useParams, Link } from 'react-router-dom';
import './MovieDetails.css';

function MovieDetails({ movies }) {
  const { title } = useParams();
  const movie = movies.find((m) => m.title === title);

  if (!movie) return <p>Movie not found.</p>;

  return (
    <div className="movie-details">
  <h2>{movie.title}</h2>
  <p className="description">{movie.description}</p>
  <div className="trailer-container">
    <iframe
      src={movie.trailerLink}
      title={movie.title}
      frameBorder="0"
      allowFullScreen
    ></iframe>
  </div>
  <Link to="/" className="back-link">← Back to Home</Link>
</div>
  );
}

export default MovieDetails;
