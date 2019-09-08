import * as actions from './index';

describe('actions', () => {
  it('should have a type of FOUND_BOOKS', () => {
    const mockBooks = [];
    const expectedAction = {
      type: 'FOUND_BOOKS',
      foundBooks: []
    };

    const result = actions.setBooks(mockBooks);

    expect(result).toEqual(expectedAction);
  });

  it('should have a type of FOUND_USER', () => {
    const mockUser = {};
    const expectedAction = {
      type: 'FOUND_USER',
      foundUser: {}
    };

    const result = actions.setUser(mockUser);

    expect(result).toEqual(expectedAction);
  });

  it('should have a type of REMOVE_USER', () => {
    const expectedAction = {
      type: 'REMOVE_USER'
    };

    const result = actions.logoutUser();

    expect(result).toEqual(expectedAction);
  });

  it('should have a type of FOUND_FAVORITES', () => {
    const mockFavorites = [];
    const expectedAction = {
      type: 'FOUND_FAVORITES',
      foundFavorites: []
    };

    const result = actions.setFavorites(mockFavorites);

    expect(result).toEqual(expectedAction);
  });

  it('should have a type of ADD_FAVORITE', () => {
    const mockFavorite = {};
    const expectedAction = {
      type: 'ADD_FAVORITE',
      newFavorite: {}
    };

    const result = actions.addFavorite(mockFavorite);

    expect(result).toEqual(expectedAction);
  });

  it('should have a type of REMOVE_FAVORITE', () => {
    const mockId = 42;
    const expectedAction = {
      type: 'REMOVE_FAVORITE',
      id: 42
    };

    const result = actions.removeFavorite(mockId);

    expect(result).toEqual(expectedAction);
  });

  it('should have a type of SHOW_ALL', () => {
    const expectedAction = {
      type: 'SHOW_ALL'
    };

    const result = actions.showAllFilter();

    expect(result).toEqual(expectedAction);
  });

  it('should have a type of SHOW_GENRE', () => {
    const mockGenre = 'Mystery'
    const expectedAction = {
      type: 'SHOW_GENRE',
      genreName: 'Mystery'
    };

    const result = actions.showGenreFilter(mockGenre);

    expect(result).toEqual(expectedAction);
  });

  it('should have a type of SET_GENRES', () => {
    const mockFavorites = [];
    const expectedAction = {
      type: 'SET_GENRES',
      favorites: []
    };

    const result = actions.setGenres(mockFavorites);

    expect(result).toEqual(expectedAction);
  });

  it('should have a type of ADD_GENRE', () => {
    const mockGenre = 'Mystery'
    const expectedAction = {
      type: 'ADD_GENRE',
      genre: 'Mystery'
    };

    const result = actions.addGenre(mockGenre);

    expect(result).toEqual(expectedAction);
  });
});