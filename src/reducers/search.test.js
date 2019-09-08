import { currentBooks } from './search';

describe('search reducer', () => {
  it('should return the initial state', () => {
    const expected = [];

    const result = currentBooks(undefined, {});

    expect(result).toEqual(expected);
  })

  it('should return the new state of all found books when FOUND_BOOKS action is passed through', () => {
    const expected = [
      {
        book_name: 'Mystery',
        primary_genre_name: 'Mystery'
      },
      {
        book_name: 'Comedy',
        primary_genre_name: 'Comedy'
      }
    ]
    const actionObj = {
      type: 'FOUND_BOOKS',
      foundBooks: [
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

    const result = currentBooks(undefined, actionObj);

    expect(result).toEqual(expected);
  });

});