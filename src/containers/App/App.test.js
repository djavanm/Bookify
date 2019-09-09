import React from 'react';
import { App } from './App';
import { shallow } from 'enzyme';

describe('App', () => {
  let wrapper;
  const currentUserMock = {
    name: 'Sam',
    email: 'blah@gmail.com',
    password: 'password'
  }
  const setBooksMock = jest.fn();
  const showStateMock = jest.fn();
  const addFavoriteMock = jest.fn();
  const setFavoritesMock = jest.fn();
  const setGenresMock = jest.fn();
  const addGenreMock = jest.fn();

  beforeEach(() => {
    wrapper = shallow(<App
      currentUser={currentUserMock}
      setBooks={setBooksMock}
      showState={showStateMock}
      addFavorite={addFavoriteMock}
      setFavorites={setFavoritesMock}
      setGenres={setGenresMock}
      addGenre={addGenreMock}
       />)
  })

  it('should match the snapshot with the data passed through', () => {
    expect(wrapper).toMatchSnapshot();
  })
})
