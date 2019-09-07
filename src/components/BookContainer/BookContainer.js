import React from 'react';
import Book from '../../containers/Book/Book'
import { connect } from 'react-redux';

const BookContainer = ({ books, toggleFavorite}) => {
  const displayedBooks = books.map(book => {
    return <Book data={book} key={book.book_id} toggleFavorite={toggleFavorite} />
  })

  return (
    <section className="book-container">
      {displayedBooks}
    </section>
  )
}

export const mapStateToProps = state => ({
  books: state.currentBooks
})

export default connect(mapStateToProps)(BookContainer);
