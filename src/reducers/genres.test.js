import { genres } from './genres';

describe('genres reducer', () => {
  it('should return the initial state', () => {
    const expected = [];

    const result = genres(undefined, {});

    expect(result).toEqual(expected);
  })

  it('should return the new state of all available Genres when SET_GENRES action is passed through', () => {
    const expected = ['Mystery', 'Comedy']
    const actionObj = {
      type: 'SET_GENRES',
      favorites: [
        {
          book_name: 'Mystery',
          primary_genre_name: 'Mystery'
        },
        {
          book_name: 'Comedy',
          primary_genre_name: 'Comedy'
        }
      ]
    };

    const result = genres(undefined, actionObj);

    expect(result).toEqual(expected);
  });

  it('should return the new list of genres with the added genre when ADD_GENRE action is passed through', () => {
    const expected = [
      'Fiction'
    ]
    const actionObj = {
      type: 'ADD_GENRE',
      genre: 'Fiction'
    };

    const result = genres(undefined, actionObj);

    expect(result).toEqual(expected);
  });

});