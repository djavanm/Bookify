import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';


export const Book = ({currentUser, data, toggleFavorite, favorites}) => {
  const { author_name, book_name, artwork_url, book_id } = data;
  let shortName = book_name.split(' ')
  if(shortName.length > 5) {
    shortName = [shortName[0], shortName[1],shortName[2], shortName[3], shortName[4], shortName[5], shortName[6], ' ...']
  }
  shortName = shortName.join(' ')
  const isFavorite = favorites.map(favorite => favorite.book_id).includes(book_id);
  const btn = isFavorite ? 'btn-active': 'btn'
  const favoriteBtn = currentUser ? <button className={btn} onClick={() => toggleFavorite(data, isFavorite)}>Fav</button> : <Link to='/login'><button>Fav</button></Link>
  return (
    <article className='book'>
      <img src={artwork_url} alt={`Cover for ${book_name}`} className='card-cover' />
      <section className='card-info'>
      <Link to={`/book/${book_id}`} className="link">
        <p className='book-name'>{shortName}</p>
      </Link>
      <p className='author-name'>{author_name}</p>
      </section>
      {favoriteBtn}
    </article>
  )
}

export const mapStateToProps = state => ({
  currentUser: state.currentUser,
  favorites: state.favorites
});

export default connect(mapStateToProps, null)(Book);
