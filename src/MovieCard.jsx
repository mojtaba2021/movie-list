// TODO: Show additional movie information (rating, genre, plot, actors, etc.)
// TODO: Add a favorites button/feature
// TODO: Improve accessibility (alt text, ARIA labels, keyboard navigation)
// TODO: Add unit tests for this component

import React from 'react';

const MovieCard = ({ movie: { id, startYear, primaryImage, primaryTitle } }) => {
  return (
    <div className="movie" key={id}>
      <div>
        <p>{startYear}</p>
      </div>

      <div>
        <img src={primaryImage !== "N/A" ? primaryImage : "https://via.placeholder.com/400"} alt={primaryTitle} />
      </div>

      <div>
        <h3>{primaryTitle}</h3>
      </div>
    </div>
  );
}

export default MovieCard;