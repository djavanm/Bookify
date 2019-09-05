export const queriedBooks = (state = [], action) => {
  switch (action.type) {
    case 'FOUND_BOOKS':
      return [...action.foundBooks]
    default:
      return state;
  }
}
