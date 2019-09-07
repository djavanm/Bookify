import { combineReducers } from 'redux';
import { currentBooks } from './search';
import { currentUser } from './currentUser';
import { favorites } from './favorites';
import { genreFilter } from './genreFilter';
import { genres } from './genres';

export const rootReducer = combineReducers({
  currentUser,
  currentBooks,
  favorites,
  genreFilter,
  genres
});
