import { combineReducers } from 'redux';
import { currentBooks } from './search';
import { currentUser } from './currentUser';
import { favorites } from './favorites';
import { genreFilter } from './genreFilter';
import { genres } from './genres';
import { searchFilter } from './searchFilter';

export const rootReducer = combineReducers({
  currentUser,
  currentBooks,
  favorites,
  genreFilter,
  genres,
  searchFilter
});
