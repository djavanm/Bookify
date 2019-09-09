import React from 'react';
import { shallow } from 'enzyme';
import { Book } from './Book';

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
  const favoritesMock = []

  beforeEach(() => {
    wrapper = shallow(<Book
      currentUser={currentUserMock}
      data={dataMock}
      toggleFavorite={toggleFavoriteMock}
      favorites={favoritesMock}
      />)
  })

  it('should', () => {
    expect(wrapper).toMatchSnapshot();
  })
})