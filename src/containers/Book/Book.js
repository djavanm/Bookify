import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';


const Book = ({currentUser, data, toggleFavorite, favorites}) => {
  const { author_name, book_name, artwork_url, description, release_date, book_id } = data;
  let isFavorite = favorites.map(favorite => favorite.book_id).includes(book_id);
  const favoriteBtn = currentUser ? <button onClick={() => toggleFavorite(data, isFavorite)}>Fav</button> : <Link to='/login'><button>Fav</button></Link> 
  return (
    <article className='book'>
      <img src={artwork_url} alt={`Cover for ${book_name}`} />
      <p>{author_name}</p>
      <p>{book_name}</p>
      {favoriteBtn}
    </article>
  )
}

export const mapStateToProps = state => ({
  currentUser: state.currentUser,
  favorites: state.favorites
});

export default connect(mapStateToProps, null)(Book);
