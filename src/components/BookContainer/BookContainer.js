import React from 'react';
import Book from '../Book/Book'
import { connect } from 'react-redux';

const BookContainer = ({books, toggleFavorite, favorites}) => {
  const displayedBooks = books.map(book => {
    let bool = favorites.map(favorite => favorite.book_id).includes(book.book_id);
    return <Book data={book} key={book.book_id} toggleFavorite={toggleFavorite} isFavorite={bool}/>
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
