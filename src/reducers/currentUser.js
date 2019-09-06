export const currentUser = (state = null, action) => {
  switch (action.type) {
    case 'FOUND_USER':
      return action.foundUser;
    default:
      return state;
  }
}
