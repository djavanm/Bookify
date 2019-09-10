import { fetchOnLoad, getBooks, createUser, getFavorites, postFavorite, deleteFavorite } from './apiCalls';


describe('apiCalls', () => {
  let mockBook;
  let mockNewUser;
  let mockFavoriteBook;
  let mockFavoriteBooks;
  beforeEach(() => {
    mockBook = {
      collectionId: 1,
      artistName: 'Djavan',
      collectionName: 'How to do apiCalls, version 1',
      artworkUrl100: 'image string thing goes here',
      releaseDate: '9999',
      description: 'The description on this is so descriptive',
      primaryGenreName: 'Loud'
    }
  });

  mockFavoriteBook = {
    id: 12,
    book_id: 1,
    author_name: 'Djavan',
    book_name: 'How to do apiCalls, version 1',
    artwork_url: 'image string that goes here',
    release_date: '9999',
    description: 'The description on this is so descriptive',
    primary_genre_name: 'Loud'
  };

  mockFavoriteBooks = [{
    id: 12,
    book_id: 1,
    author_name: 'Djavan',
    book_name: 'How to do apiCalls, version 1',
    artwork_url: 'image string that goes here',
    release_date: '9999',
    description: 'The description on this is so descriptive',
    primary_genre_name: 'Loud'
  }];

  mockNewUser = {
    name: 'Sam',
    email: 'Sam@aol.com',
    password: 'eggcelent',
    id: 1
  };

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
  });

  it('getBooks should return an error if the server is down', () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.reject(Error('fetch failed.'))
    });
    expect(fetchOnLoad()).rejects.toEqual(Error('fetch failed.'))
  });

  it('getBooks should return an error if it could not retrieve books', () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: false
      });
    });
    expect(fetchOnLoad()).rejects.toEqual(Error('Could not retrieve books.'))
  });

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

  it('createUser should return an object with the user id after a successful search', () => {
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

  it('createUser should return an error if it could not create a user', () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: false
      });
    });
    expect(createUser(mockNewUser, 'users')).rejects.toEqual(Error('User cannot be created.'))
  });

  it('getFavorites should search the proper URL for a users favorite books', () => {
    const currentUser = {
      name: 'sam',
      id: 1,
      email: 'sam@aol.com'
    };
    const expected = `http://localhost:3001/api/v1/users/${currentUser.id}/bookfavorites`;
    getFavorites(1);
    expect(window.fetch).toHaveBeenCalledWith(expected);
  });

  it('getFavorites should return an array of favorites of the current user\'s favorite books', () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockFavoriteBooks)
      })
    })
    expect(getFavorites(1)).resolves.toEqual(mockFavoriteBooks);
  });

  it('getFavorites should return an error if it could not create a user', () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: false
      });
    });
    expect(getFavorites(1)).rejects.toEqual(Error('Could not retrieve favorites.'))
  });

  it('postFavorite should go to the proper URL and current book', () => {
    const options = {
      method: 'POST',
      body: JSON.stringify(mockFavoriteBook),
      headers: {
        'Content-Type': 'application/json'
      }
    }
    postFavorite(mockFavoriteBook, 1);
    expect(window.fetch).toHaveBeenCalledWith(`http://localhost:3001/api/v1/users/${1}/bookfavorites`, options)
  });

  it('postFavorite should return the favorited book with the current user\'s id attached', () => {
    const expected = {
      id: 12,
      user_id: 1,
      book_id: 1,
      author_name: 'Djavan',
      book_name: 'How to do apiCalls, version 1',
      artwork_url: 'image string that goes here',
      release_date: '9999',
      description: 'The description on this is so descriptive',
      primary_genre_name: 'Loud'
    }
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: true,
        json: () => Promise.resolve(expected)
      })
    })
    expect(postFavorite(mockFavoriteBook, 1)).resolves.toEqual(expected);
  });

  it('postFavorite should return an error if it could not create a user', () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: false
      });
    });
    expect(postFavorite(mockFavoriteBook, 1)).rejects.toEqual(Error('Could not post favorite.'))
  });

  it('deleteFavorite should call the proper URL when removing a user\'s favorite book', () => {
    const options = {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    };
    const mockId = 1;
    const mockBookId = 1
    deleteFavorite(mockId, mockBookId);
    expect(window.fetch).toHaveBeenCalledWith(`http://localhost:3001/api/v1/users/${mockId}/bookfavorites/${mockBookId}`, options)
  });

  it('deleteFavorite should return an error if it could not delete a favorite', () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: false
      });
    });
    expect(deleteFavorite(1, 1)).rejects.toEqual(Error('Could not delete favorite.'))
  });
});
