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
