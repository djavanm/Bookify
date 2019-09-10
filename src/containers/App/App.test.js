import React from 'react';
import { App, mapStateToProps, mapDispatchToProps } from './App';
import { setBooks, addFavorite, setFavorites, setGenres, addGenre, showStart, logoutUser } from '../../actions';
import { fetchOnLoad, postFavorite, deleteFavorite} from '../../util/apiCalls';
import { shallow } from 'enzyme';

jest.mock('../../util/apiCalls');

fetchOnLoad.mockImplementation(() => {
  return Promise.resolve({
    id: 1,
    book_id: 1,
    author_name: 'Djavan',
    book_name: 'How to do apiCalls, version 1',
    artwork_url: 'image string that goes here',
    release_date: '9999',
    description: 'The description on this is so descriptive',
    primary_genre_name: 'Loud'
  })
});

postFavorite.mockImplementation(() => {
  return Promise.resolve({
    id: 1,
    book_id: 1,
    author_name: 'Djavan',
    book_name: 'How to do apiCalls, version 1',
    artwork_url: 'image string that goes here',
    release_date: '9999',
    description: 'The description on this is so descriptive',
    primary_genre_name: 'Loud'
  })
});

deleteFavorite.mockImplementation(() => {
  return Promise.resolve(1)
});

describe('App', () => {
  let wrapper;
  const currentUserMock = {
    name: 'Sam',
    email: 'blah@gmail.com',
    password: 'password',
    id: 1
  }
  const mockBook = {
    id: 1,
    book_id: 1,
    author_name: 'Djavan',
    book_name: 'How to do apiCalls, version 1',
    artwork_url: 'image string that goes here',
    release_date: '9999',
    description: 'The description on this is so descriptive',
    primary_genre_name: 'Loud'
  }

  const mockState = {
      currentBooks: [mockBook],
      currentUser: currentUserMock,
      favorites: [mockBook],
      genres: 'Loud',
      genreFilter: '',
      searchFilter: { start: 0, end: 10, length: 10},
    };

  const setBooksMock = jest.fn();
  const showStateMock = jest.fn();
  const addFavoriteMock = jest.fn();
  const setFavoritesMock = jest.fn();
  const setGenresMock = jest.fn();
  const addGenreMock = jest.fn();
  const showStartMock = jest.fn();


  beforeEach(() => {
    wrapper = shallow(<App
      currentUser={currentUserMock}
      setBooks={setBooksMock}
      showState={showStateMock}
      addFavorite={addFavoriteMock}
      setFavorites={setFavoritesMock}
      setGenres={setGenresMock}
      addGenre={addGenreMock}
      showStart={showStartMock}
       />)
  });

  it('should match the snapshot with the data passed through', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('mapStateToProps should grab the props it needs', () => {
    const expected = {
      currentBooks: [mockBook],
      currentUser: currentUserMock,
      favorites: [mockBook]
    }
    const mappedProps = mapStateToProps(mockState);
    expect(mappedProps).toEqual(expected);
  });

  it('it calls dispatch with the setBooks action', () => {
    const mockDispatch = jest.fn();
    const actionToDispatch = setBooks([mockBook]);
    const mappedProps = mapDispatchToProps(mockDispatch);
    mappedProps.setBooks([mockBook]);

    expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
  });

  it('it calls dispatch with the addFavorite action', () => {
    const mockDispatch = jest.fn();
    const actionToDispatch = addFavorite(mockBook);
    const mappedProps = mapDispatchToProps(mockDispatch);
    mappedProps.addFavorite(mockBook);

    expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
  });

  it('it calls dispatch with the setFavorites action', () => {
    const mockDispatch = jest.fn();
    const actionToDispatch = setFavorites([mockBook]);
    const mappedProps = mapDispatchToProps(mockDispatch);
    mappedProps.setFavorites([mockBook]);

    expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
  });

  it('it calls dispatch with the logoutUser action', () => {
    const mockDispatch = jest.fn();
    const actionToDispatch = logoutUser();
    const mappedProps = mapDispatchToProps(mockDispatch);
    mappedProps.logoutUser();

    expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
  });

  it('it calls dispatch with the setGenres action', () => {
    const mockDispatch = jest.fn();
    const actionToDispatch = setGenres('Loud');
    const mappedProps = mapDispatchToProps(mockDispatch);
    mappedProps.setGenres('Loud');

    expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
  });

  it('it calls dispatch with the setGenres action', () => {
    const mockDispatch = jest.fn();
    const actionToDispatch = setGenres([mockBook]);
    const mappedProps = mapDispatchToProps(mockDispatch);
    mappedProps.setGenres([mockBook]);

    expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
  });

  it('it calls dispatch with the addGenre action', () => {
    const mockDispatch = jest.fn();
    const actionToDispatch = addGenre('Loud');
    const mappedProps = mapDispatchToProps(mockDispatch);
    mappedProps.addGenre('Loud');

    expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
  });

  it('it calls dispatch with the showStart action', () => {
    const mockDispatch = jest.fn();
    const actionToDispatch = showStart({start: 0, end: 10, length: 10});
    const mappedProps = mapDispatchToProps(mockDispatch);
    mappedProps.showStart({start: 0, end: 10, length: 10});

    expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
  });

  it('should call postFavorite when toggleFavorite is given a false value', async () => {
    wrapper.instance().toggleFavorite(mockBook, false);
    expect(postFavorite).toHaveBeenCalled();
  });

  it('should call deleteFavorite when toggleFavorite is given a false value', async () => {
    wrapper.instance().toggleFavorite(mockBook, true);
    expect(deleteFavorite).toHaveBeenCalled();
  });

  it('should call fetchOnLoad when mounting', () => {
    expect(fetchOnLoad).toHaveBeenCalled();
  });

});
