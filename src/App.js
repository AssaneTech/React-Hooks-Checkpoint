/*Import*/
import React, { useState } from 'react';
import MovieList from './MovieList';
import Filter from './Filter';
import './App.css'

function App() {
  //State for films and filters
  const [movies, setMovies] = useState([]);
  const [searchTitle, setSearchTitle] = useState('');
  const [rating, setRating] = useState(0);

  // state for the formular to add elements
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [posterURL, setPosterURL] = useState('');
  const [newRating, setNewRating] = useState(0);

  //Function to add a movie and to create a new object
  const handleAddMovie = () => {
    const newMovie = { title, description, posterURL, rating: newRating };
    setMovies([...movies, newMovie]);
    setTitle('');
    setDescription('');
    setPosterURL('');
    setNewRating(0);
  };
//Filer
  const filteredMovies = movies.filter(
    (m) =>
      m.title.toLowerCase().includes(searchTitle.toLowerCase()) &&
      m.rating >= rating
  );

  return (
    <div className="App">
      <h1>🎬 My Movie App</h1>

      <Filter
        searchTitle={searchTitle}
        setSearchTitle={setSearchTitle}
        rating={rating}
        setRating={setRating}
      />

      {/* Add Movie Form */}
      <div className="add-movie">
        <h2>Add a New Movie</h2>
        <input placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
        <input placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} />
        <input placeholder="Poster URL" value={posterURL} onChange={(e) => setPosterURL(e.target.value)} />
        <input type="number" placeholder="Rating" value={newRating} onChange={(e) => setNewRating(Number(e.target.value))} min={0} max={10} />
        <button onClick={handleAddMovie}>Add Movie</button>
      </div>

      <MovieList movies={filteredMovies} />
    </div>
  );
}

export default App;
