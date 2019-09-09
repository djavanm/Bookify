import { favorites } from './favorites';

describe('favorites reducer', () => {
  it('should return the initial state', () => {
    const expected = [];

    const result = favorites(undefined, {});

    expect(result).toEqual(expected);
  })

  it('should return the new state with found favorites when FOUND_FAVORITES action is passed through', () => {
    const expected = []
    const actionObj = {
      type: 'FOUND_FAVORITES',
      foundFavorites: []
    };

    const result = favorites(undefined, actionObj);

    expect(result).toEqual(expected);
  });

  it('should return the new state with a new Favorite added when ADD_FAVORITE action is passed through', () => {
    const expected = [
      {
      book_name: 'Good Omens',
      book_id: 42
    }
  ]
    const actionObj = {
      type: 'ADD_FAVORITE',
      newFavorite: {
        book_name: 'Good Omens',
        book_id: 42
      }
    };

    const result = favorites(undefined, actionObj);

    expect(result).toEqual(expected);
  });

  it('should return the new state with a favorite removed when REMOVE_FAVORITE action is passed through', () => {
    const expected = []
    const actionObj = {
      type: 'REMOVE_FAVORITE',
      id: 42
    };

    const result = favorites(undefined, actionObj);

    expect(result).toEqual(expected);
  });
});

