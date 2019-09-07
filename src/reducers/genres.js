export const genres = (state = [], action) => {
  switch(action.type) {
    case 'SET_GENRES':
      return action.favorites.reduce((acc, fav) => {
        if(!acc.includes(fav.primary_genre_name)) {
          acc = [...acc, fav.primary_genre_name]
        }
        return acc;
      }, [])
    case 'ADD_GENRE':
      return state.includes(action.genre) ? state : [...state, action.genre];
    default:
      return state;
  }
}
