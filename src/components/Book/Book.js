import React from 'react';

const Book = ({data, toggleFavorite, isFavorite}) => {
  const { author_name, book_name, artwork_url, description, release_date, book_id } = data;
  return (
    <article className='book'>
      <img src={artwork_url} alt={`Cover for ${book_name}`} />
      <p>{author_name}</p>
      <p>{book_name}</p>
      <button onClick={() => toggleFavorite(data, isFavorite)}>Fav</button>
    </article>
  )
}

export default Book;
