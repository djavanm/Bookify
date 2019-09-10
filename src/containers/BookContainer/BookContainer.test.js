import React from 'react';
import { shallow } from 'enzyme';
import { BookContainer, mapStateToProps, mapDispatchToProps } from './BookContainer';
import { showStart, showNext, showPrevious } from '../../actions';

describe('BookContainer', () => {
  let wrapper;
  const booksMock = [];
  const currentUserMock = {
    name: 'Sam',
    email: 'blah@gmail.com',
    password: 'password',
    id: 1
  }
  const favoritesMock = [
    {
      author_name: 'Neil Gaiman',
      book_name: 'Good Omens',
      artwork_url: 'https://images/good',
      book_id: 42
    }
  ];
  const toggleFavoriteMock = jest.fn();
  const searchFilterMock = {};
  const showStartMock = jest.fn();
  const showNextMock = jest.fn();
  const showPreviousMock = jest.fn();
  const mockState = {
      currentBooks: [favoritesMock],
      currentUser: currentUserMock,
      favorites: [],
      genres: 'Loud',
      genreFilter: '',
      searchFilter: { start: 0, end: 10, length: 10},
    };

  beforeEach(() => {
    wrapper = shallow(<BookContainer
      all={true}
      books={booksMock}
      favorites={favoritesMock}
      toggleFavorite={toggleFavoriteMock}
      searchFilter={searchFilterMock}
      showStart={showStartMock}
      showNext={showNextMock}
      showPrevious={showPreviousMock}
      genreFilter=''
      />)
  });

  it('should match the snapshot with the data passed through', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('mapStateToProps should grab the props it needs', () => {
    const expected = {
      books: [favoritesMock],
      genreFilter: '',
      searchFilter: { start: 0, end: 10, length: 10},
      favorites: []
    }
    const mappedProps = mapStateToProps(mockState);
    expect(mappedProps).toEqual(expected);
  });

  it('it calls dispatch with the showNext action', () => {
    const mockDispatch = jest.fn();
    const actionToDispatch = showNext({ start: 0, end: 10, length: 10});
    const mappedProps = mapDispatchToProps(mockDispatch);
    mappedProps.showNext({ start: 0, end: 10, length: 10});

    expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
  });

  it('it calls dispatch with the showPrevious action', () => {
    const mockDispatch = jest.fn();
    const actionToDispatch = showPrevious({ start: 0, end: 10, length: 10});
    const mappedProps = mapDispatchToProps(mockDispatch);
    mappedProps.showPrevious({ start: 0, end: 10, length: 10});

    expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
  });

  it('it calls dispatch with the showStart action', () => {
    const mockDispatch = jest.fn();
    const actionToDispatch = showStart({start: 0, end: 10, length: 10});
    const mappedProps = mapDispatchToProps(mockDispatch);
    mappedProps.showStart({start: 0, end: 10, length: 10});

    expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
  });
});
