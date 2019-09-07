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
