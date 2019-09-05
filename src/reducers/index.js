export const queriedBooks = (state = [], action) => {
  switch (action.type) {
    case 'SEARCH_BOOKS':
      return [...action.foundBooks]
    default:
      return state;
  }
}
