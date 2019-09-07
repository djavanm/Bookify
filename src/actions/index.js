export const setBooks = foundBooks => ({
  type: 'FOUND_BOOKS',
  foundBooks
});

export const setUser = foundUser => ({
  type: 'FOUND_USER',
  foundUser
}); 

export const logoutUser = () => ({
  type: 'REMOVE_USER'
})

export const setFavorites = foundFavorites => ({
  type: 'FOUND_FAVORITES',
  foundFavorites
})

export const addFavorite = newFavorite => ({
  type: 'ADD_FAVORITE',
  newFavorite
})

export const removeFavorite = id => ({
  type: 'REMOVE_FAVORITE',
  id
})

export const showAllFilter = () => ({
  type: 'SHOW_ALL'
})

export const showGenreFilter = genreName => ({
  type: 'SHOW_GENRE',
  genreName
})

export const setGenres = favorites => ({
  type: 'SET_GENRES',
  favorites
})

export const addGenre = genre => ({
  type: 'ADD_GENRE',
  genre
})
