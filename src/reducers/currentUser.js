export const currentUser = (state = null, action) => {
  switch (action.type) {
    case 'FOUND_USER':
      return action.foundUser;
    case 'REMOVE_USER':
      return null;
    default:
      return state;
  }
}
