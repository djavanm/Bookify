import React from 'react';

const Book = ({data, toggleFavorite, isFavorite}) => {
  const { artistName, collectionName, artworkUrl100, description, releaseDate } = data
  return (
    <article className='book'>
      <img src={artworkUrl100} alt={`Cover for ${collectionName}`} />
      <p>{artistName}</p>
      <p>{collectionName}</p>
      <button onClick={() => toggleFavorite(isFavorite)}>Fav</button>
    </article>
  )
}

export default Book;
