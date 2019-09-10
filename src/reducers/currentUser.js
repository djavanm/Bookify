const initialState = localStorage.getItem('user') ?
 JSON.parse(localStorage.getItem('user')) : null;

export const currentUser = (state = initialState, action) => {
  switch (action.type) {
    case 'FOUND_USER':
      return action.foundUser;
    case 'REMOVE_USER':
      return null;
    default:
      return state;
  }
}
