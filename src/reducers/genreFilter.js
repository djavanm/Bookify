export const genreFilter = ( state = '', action) => {
  switch(action.type) {
    case 'SHOW_ALL':
      return '';
    case 'SHOW_GENRE':
      return action.genreName;
    default:
      return state;
  }
}