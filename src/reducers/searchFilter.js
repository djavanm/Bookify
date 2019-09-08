export const searchFilter = ( state = {start: 0, end: 10 }, action) => {
  switch(action.type) {
    case 'SHOW_START':
      return state
    case 'SHOW_NEXT':
      return { start: action.current.start + 10, end: action.current.end + 10 };
    case 'SHOW_PREVIOUS':
      return { start: action.current.start - 10, end: action.current.end - 10 };
    default:
      return state;
  }
}
