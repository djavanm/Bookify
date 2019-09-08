import React, { Component } from 'react';
import Book from '../../containers/Book/Book'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { showStart, showNext, showPrevious } from '../../actions';

const getTenBooks = (currentBooks, searchFilter) => {
  return currentBooks.slice(searchFilter.start, searchFilter.end)
}

const getFilteredFavorites = (favorites, genre) => {
  return genre ? favorites.filter(fav => fav.primary_genre_name === genre)
  : favorites;
};

const BookContainer = ({all, books, favorites, toggleFavorite, searchFilter, showStart, showNext, showPrevious}) => {
  const data = all ? books : favorites;
  const displayedBooks = data.map(book => {
    return <Book data={book} key={book.book_id} toggleFavorite={toggleFavorite} />
  })
  return (
    <section>
      <button onClick={() => showPrevious(searchFilter)}>Show Prev</button>
      <button onClick={() => showNext(searchFilter)}>Show Next</button>
      <section className="book-container">
        {displayedBooks}
      </section>
    </section>

  )
}

export const mapStateToProps = state => ({
  books: getTenBooks(state.currentBooks, state.searchFilter),
  favorites: getFilteredFavorites(state.favorites, state.genreFilter),
  genreFilter: state.genreFilter,
  searchFilter: state.searchFilter
})

export const mapDispatchToProps = dispatch => (
  bindActionCreators({ showStart, showNext, showPrevious }, dispatch)
)

export default connect(mapStateToProps, mapDispatchToProps)(BookContainer);
