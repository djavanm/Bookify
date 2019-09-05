import React from 'react';
import Book from '../Book/Book'
import { connect } from 'react-redux';

const BookContainer = ({books}) => {
  const displayedBooks = books.map(book => {
    return <Book data={book} key={book.collectionId}/>
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