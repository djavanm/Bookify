import { combineReducers } from 'redux';
import { currentBooks } from './search';
import { currentUser } from './currentUser';

export const rootReducer = combineReducers({
  currentUser,
  currentBooks
});
