export const searchFilter = ( state = {start: 0, end: 10, length: 10 }, action) => {
  switch(action.type) {
    case 'SHOW_START':
      return action.current
    case 'SHOW_NEXT':
      return { start: action.current.start + 10, end: action.current.end + 10, length: action.current.length };
    case 'SHOW_PREVIOUS':
      return { start: action.current.start - 10, end: action.current.end - 10, length: action.current.length };
    default:
      return state;
  }
}
