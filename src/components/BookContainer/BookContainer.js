import React from 'react';
import Book from '../Book/Book'
import { connect } from 'react-redux';

const BookContainer = ({books, toggleFavorite, favorites}) => {
  const displayedBooks = books.map(book => {
    let bool = favorites.map(favorite => favorite.collectionId).includes(book.collectionId);
    return <Book data={book} key={book.collectionId} toggleFavorite={toggleFavorite} isFavorite={bool}/>
  })

  return (
    <section className="book-container">
      {displayedBooks}
    </section>
  )
}

export const mapStateToProps = state => ({
  books: state.currentBooks,
  favorites: state.favorites
})

export default connect(mapStateToProps)(BookContainer);
