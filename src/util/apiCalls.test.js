import { fetchOnLoad, getBooks, cleanBooks, createUser, getFavorites, postFavorite, deleteFavorite } from './apiCalls';


describe('apiCalls', () => {
  let mockBook;
  let mockNewUser;
  beforeEach(() => {
    mockBook = {
      collectionId: 1,
      artistName: 'Djavan',
      collectionName: 124,
      artworkUrl100: 'image string thing goes here',
      releaseDate: '9999',
      description: 'The description on this is so descriptive',
      primaryGenreName: 'Loud'
    }
  });

  mockNewUser = {
    name: 'Sam',
    email: 'Sam@aol.com',
    password: 'eggcelent'
  }

  window.fetch = jest.fn().mockImplementation(() => {
    return Promise.resolve({
      ok: true,
      json: () => Promise.resolve({
        results: [mockBook]
      })
    });
  });

  it('fetch on load should return an array of clean books after a the page loads', () => {

    expect(fetchOnLoad()).resolves.toEqual(mockBook);
  });

  it('getBooks should call a url with the correct user input', () => {
    const mockSearch = 'pants';
    const mockUrlAndSearch = `https://itunes.apple.com/search?media=audiobook&term=${mockSearch}`;
    getBooks(mockSearch);
    expect(window.fetch).toHaveBeenCalledWith(mockUrlAndSearch)
  });

  it('getBooks should call a url and return cleaned data', () => {
    expect(getBooks('testing123')).resolves.toEqual(mockBook)
  })

  it('createUser should get with the correct url, given the correct route', () => {
    const options = {
      method: 'POST',
      body: JSON.stringify(mockNewUser),
      headers: {
        'Content-Type': 'application/json'
      }
    };
    createUser(mockNewUser, 'users');
    expect(window.fetch).toHaveBeenCalledWith(`http://localhost:3001/api/v1/users`, options);
  });

  it('should return an object with the user id after a successful search', () => {
    const options = {
      method: 'POST',
      body: JSON.stringify(mockNewUser),
      headers: {
        'Content-Type': 'application/json'
      }
    };
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: true,
        json: () => {
          return Promise.resolve({
            name: 'Sam',
            email: 'Sam@aol.com',
            id: 1
          });
        }
      });
    });
    const expected = {
      name: 'Sam',
      email: 'Sam@aol.com',
      id: 1
    }
    expect(createUser(mockNewUser, 'users')).resolves.toEqual(expected)
  });

  
});
