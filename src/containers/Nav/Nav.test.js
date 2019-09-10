import React from 'react';
import { shallow } from 'enzyme';
import { Nav, mapStateToProps, mapDispatchToProps } from './Nav';
import { logoutUser, showGenreFilter, showAllFilter} from '../../actions';

describe('Nav', () => {
  let wrapper
  const currentUserMock = {
    name: 'Sam',
    password: 'blah',
    email: 'blah@gmail.com'
  }
  const logoutUserMock = jest.fn();
  const genresMock = ['Mystery', 'Comedy']
  const mockState = {
      currentBooks: [],
      currentUser: currentUserMock,
      favorites: [],
      genres: genresMock,
      genreFilter: '',
      searchFilter: { start: 0, end: 10, length: 10},
    };

  beforeEach(() => {
    wrapper = shallow(<Nav
      home={true}
      currentUser={currentUserMock}
      logoutUser={logoutUserMock}
      genres={genresMock}
      showGenreFilter={showGenreFilter}
      showAllFilter={showAllFilter}
       />)
  })

  it('should match the snapshot with the data passed through', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('it calls dispatch with the showAll action', () => {
    const mockDispatch = jest.fn();
    const actionToDispatch = showAllFilter();
    const mappedProps = mapDispatchToProps(mockDispatch);
    mappedProps.showAllFilter();

    expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
  });

  it('it calls dispatch with the showGenre action', () => {
    const mockDispatch = jest.fn();
    const actionToDispatch = showGenreFilter('Comedy');
    const mappedProps = mapDispatchToProps(mockDispatch);
    mappedProps.showGenreFilter('Comedy');

    expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
  });

  it('mapStateToProps should grab the props it needs', () => {
    const expected = {
      genres: genresMock
    }
    const mappedProps = mapStateToProps(mockState);
    expect(mappedProps).toEqual(expected);
  });
});
