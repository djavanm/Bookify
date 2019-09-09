import React from 'react';
import { shallow } from 'enzyme';
import { Nav } from './Nav';

describe('Nav', () => {
  let wrapper
  const currentUserMock = {
    name: 'Sam',
    password: 'blah',
    email: 'blah@gmail.com'
  }
  const logoutUserMock = jest.fn();
  const genresMock = ['Mystery', 'Comedy']
  const showGenreFilterMock = jest.fn();
  const showAllFilter = jest.fn();

  beforeEach(() => {
    wrapper = shallow(<Nav
      home={true}
      currentUser={currentUserMock}
      logoutUser={logoutUserMock}
      genres={genresMock}
      showGenreFilter={showGenreFilterMock}
      showAllFilter={showAllFilter}
       />)
  })

  it('should match the snapshot with the data passed through', () => {
    expect(wrapper).toMatchSnapshot();
  })
})
