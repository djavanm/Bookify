export const genres = (state = [], action) => {
  switch(action.type) {
    case 'SET_GENRES':
      return action.favorites.reduce((acc, fav) => {
        if(!acc.includes(fav.primary_genre_name)) {
          acc = [...acc, fav.primary_genre_name]
        }
        return acc;
      }, [])
    default:
      return state;
  }
}