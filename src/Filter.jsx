import React from 'react';

function Filter({ searchTitle, setSearchTitle, rating, setRating }) {
  return (
    <div className="filter">
      <input
        type="text"
        placeholder="Search by title"
        value={searchTitle}
        onChange={(e) => setSearchTitle(e.target.value)}
      />
      <input
        type="number"
        placeholder="Min rating"
        value={rating}
        onChange={(e) => setRating(Number(e.target.value))}
        min={0}
        max={10}
      />
    </div>
  );
}

export default Filter;
