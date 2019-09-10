import React from 'react';
import { shallow } from 'enzyme';
import { Book, mapStateToProps } from './Book';

describe('Book', () => {
  let wrapper
  const currentUserMock = {
    name: 'Sam',
    password: 'blah',
    email: 'blah@gmail.com'
  }
  const dataMock = {
      author_name: 'Neil Gaiman',
      book_name: 'Good Omens',
      artwork_url: 'https://images/good',
      book_id: 42
    }
  const toggleFavoriteMock = jest.fn();
  const favoritesMock = [];
  const mockState = {
      currentBooks: [dataMock],
      currentUser: currentUserMock,
      favorites: [],
      genres: 'Loud',
      genreFilter: '',
      searchFilter: { start: 0, end: 10, length: 10},
    };

  beforeEach(() => {
    wrapper = shallow(<Book
      currentUser={currentUserMock}
      data={dataMock}
      toggleFavorite={toggleFavoriteMock}
      favorites={favoritesMock}
      />)
  });

  it('should', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should call the Toggle Favorite method on click', () => {
    wrapper.find('.btn').simulate('click');
    expect(toggleFavoriteMock).toHaveBeenCalledWith(dataMock, false);
  });

  it('mapStateToProps should grab the props it needs', () => {
    const expected = {
      currentUser: currentUserMock,
      favorites: []
    };
    const mappedProps = mapStateToProps(mockState);
    expect(mappedProps).toEqual(expected);
  });
});
