import React from 'react';
import { shallow } from 'enzyme';
import { BookContainer } from './BookContainer';

describe('BookContainer', () => {
  let wrapper
  const booksMock = []
  const favoritesMock = [
    {
      author_name: 'Neil Gaiman',
      book_name: 'Good Omens',
      artwork_url: 'https://images/good',
      book_id: 42
    }
  ]
  const toggleFavoriteMock = jest.fn();
  const searchFilterMock = jest.fn();
  const showStartMock = jest.fn();
  const showNextMock = jest.fn();
  const showPreviousMock = jest.fn();
  
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
      />)
  })

  it('should match the snapshot with the data passed through', () => {
    expect(wrapper).toMatchSnapshot();
  })
})