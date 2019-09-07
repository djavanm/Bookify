import React from 'react';
import Book from '../../containers/Book/Book'
import { connect } from 'react-redux';

const BookContainer = ({all, books, favorites, toggleFavorite}) => {
  const data = all ? books : favorites;
  const displayedBooks = data.map(book => {
    return <Book data={book} key={book.book_id} toggleFavorite={toggleFavorite} />
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
