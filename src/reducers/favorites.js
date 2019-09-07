export const favorites = (state = [], action) => {
  switch (action.type) {
    case 'FOUND_FAVORITES': 
      return action.favorites;
    case 'ADD_FAVORITE':
      return [...state, action.newFavorite]
    case 'REMOVE_FAVORITE':
      return state.filter(fav => fav.id !== action.id)
    default:
      return state;
  }
}