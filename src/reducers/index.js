import { combineReducers } from 'redux';
import { currentBooks } from './search';
import { currentUser } from './currentUser';
import { favorites } from './favorites';
import { genreFilter } from './genreFilter';

export const rootReducer = combineReducers({
  currentUser,
  currentBooks,
  favorites,
  genreFilter
});
