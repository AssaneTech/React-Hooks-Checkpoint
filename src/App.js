import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MovieList from './MovieList';
import Filter from './Filter';
import MovieDetails from './MovieDetails';
import './App.css';


function App() {
  const [movies, setMovies] = useState([]);
  const [searchTitle, setSearchTitle] = useState('');
  const [rating, setRating] = useState(0);

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [posterURL, setPosterURL] = useState('');
  const [trailerLink, setTrailerLink] = useState('');
  const [newRating, setNewRating] = useState(0);

  const handleAddMovie = () => {
    const newMovie = {
      title,
      description,
      posterURL,
      trailerLink,
      rating: newRating,
    };
    setMovies([...movies, newMovie]);
    setTitle('');
    setDescription('');
    setPosterURL('');
    setTrailerLink('');
    setNewRating(0);
  };

  const filteredMovies = movies.filter(
    (movie) =>
      movie.title.toLowerCase().includes(searchTitle.toLowerCase()) &&
      movie.rating >= rating
  );

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <div className="App">
              <h1>🎬 My Movie App</h1>

              <Filter
                searchTitle={searchTitle}
                setSearchTitle={setSearchTitle}
                rating={rating}
                setRating={setRating}
              />

              <div className="add-movie">
                <h2>Add a New Movie</h2>
                <input placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
                <input placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} />
                <input placeholder="Poster URL" value={posterURL} onChange={(e) => setPosterURL(e.target.value)} />
                <input placeholder="Trailer Link (YouTube Embed)" value={trailerLink} onChange={(e) => setTrailerLink(e.target.value)} />
                <input type="number" placeholder="Rating" value={newRating} onChange={(e) => setNewRating(Number(e.target.value))} min={0} max={10} />
                <button onClick={handleAddMovie}>Add Movie</button>
              </div>

              <MovieList movies={filteredMovies} />
            </div>
          }
        />
        <Route path="/movie/:title" element={<MovieDetails movies={movies} />} />
      </Routes>
    </Router>
  );
}

export default App;
