import { genreFilter } from './genreFilter';

describe('genreFilter reducer', () => {
  it('should return the initial state', () => {
    const expected = '';

    const result = genreFilter(undefined, {});

    expect(result).toEqual(expected);
  })

  it('should return the new state of "" when SHOW_ALL action is passed through', () => {
    const expected = ''
    const actionObj = {
      type: 'SHOW_ALL'
    };

    const result = genreFilter(undefined, actionObj);

    expect(result).toEqual(expected);
  });

  it('should return the new state of a specific genre when SHOW_GENRE action is passed through', () => {
    const expected = 'Mystery'
    const actionObj = {
      type: 'SHOW_GENRE',
      genreName: 'Mystery'
    };

    const result = genreFilter(undefined, actionObj);

    expect(result).toEqual(expected);
  });

});