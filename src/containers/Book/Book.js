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
  const btn = isFavorite ? 'btn-active': 'btn';
  const btnText = isFavorite ? '' : 'Favorite';
  const favoriteBtn = currentUser ? <button className={btn} onClick={() => toggleFavorite(data, isFavorite)}>{btnText}</button> : <Link to='/login'><button className="btn btn-fake">Favorite</button></Link>
  return (
    <article className='book'>
      <img src={artwork_url} alt={`Cover for ${book_name}`} className='card-cover' />
      <section className='card-info'>
        <p className='book-name'>{shortName}</p>
        <p className='author-name'>{author_name}</p>
        <Link to={`/book/${book_id}`} className="link">
          <p className="details-link">Click for details</p>
        </Link>
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
