import { searchFilter } from './searchFilter';

describe('searchFilter reducer', () => {
  it('should return the initial state', () => {
    const expected = { start: 0, end: 10, length: 10 };

    const result = searchFilter(undefined, {});

    expect(result).toEqual(expected);
  })

  it('should return the new state of the current searchFilter when SHOW_START action is passed through', () => {
    const expected = { start: 0, end: 10, length: 42 }
    const actionObj = {
      type: 'SHOW_START',
      current: { start: 0, end: 10, length: 42 }
    };

    const result = searchFilter(undefined, actionObj);

    expect(result).toEqual(expected);
  });

  it('should return the new searchFilter with 10 added to the start/end when SHOW_NEXT action is passed through', () => {
    const expected = { start: 10, end: 20, length: 42 }
    const actionObj = {
      type: 'SHOW_NEXT',
      current: { start: 0, end: 10, length: 42 }
    };

    const result = searchFilter(undefined, actionObj);

    expect(result).toEqual(expected);
  });

  it('should return the new searchFilter with 10 subtracted from the start/end when SHOW_PREVIOUS action is passed through', () => {
    const expected = { start: 0, end: 10, length: 42 }
    const actionObj = {
      type: 'SHOW_PREVIOUS',
      current: { start: 10, end: 20, length: 42 }
    };

    const result = searchFilter(undefined, actionObj);

    expect(result).toEqual(expected);
  });

});