import React from 'react';

const Book = ({data}) => {
  const { artistName, collectionName, artworkUrl100, description, releaseDate } = data
  return (
    <article className='book'>
      <img src={artworkUrl100} alt={`Cover for ${collectionName}`} />
      <p>{artistName}</p>
      <p>{collectionName}</p>
      <button>Fav</button>
    </article>
  )
}

export default Book;