import React from 'react';
import { shallow } from 'enzyme';
import { LoginForm, mapDispatchToProps } from './LoginForm';
import { setUser, setFavorites, setGenres } from '../../actions';
import { createUser } from '../../util/apiCalls';

jest.mock('../../util/apiCalls');

createUser.mockImplementation(() => {
  return Promise.resolve({
    name: 'Sam',
    email: 'blah@gmail.com',
    password: 'password',
    id: 1
  })
});

describe('LoginForm', () => {
  let wrapper;
  const setUserMock = jest.fn();
  const setFavoritesMock = jest.fn();
  const setGenresMock = jest.fn();
  const mockUser = {
    name: 'Sam',
    email: 'blah@gmail.com',
    password: 'password',
    id: 1
  }

  beforeEach(() => {
    wrapper = shallow(<LoginForm
      setUser={setUserMock}
      setFavorites={setFavoritesMock}
      setGenres={setGenresMock}
      />)
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should update the state when handle change is called', () => {
    const mockEventName = {
      target: {
        name: 'name',
        value: 'sam'
      }
    };
    const mockEventEmail = {
      target: {
        name: 'email',
        value: 'sam@aol.com'
      }
    };
    const mockEventPassword = {
      target: {
        name: 'password',
        value: 12345
      }
    };
    const expectedName = 'sam';
    const expectedEmail = 'sam@aol.com';
    const expectedPassword = 12345;
     wrapper.instance().handleChange(mockEventName);
     wrapper.instance().handleChange(mockEventEmail);
     wrapper.instance().handleChange(mockEventPassword);
     expect(wrapper.state('name')).toEqual(expectedName);
     expect(wrapper.state('email')).toEqual(expectedEmail);
     expect(wrapper.state('password')).toEqual(expectedPassword);
  });

  it('should toggle existing state boolean after clicking sign up or login button', () => {
    expect(wrapper.state('existingUser')).toEqual(true);
    wrapper.find('.login-btn').at(0).simulate('click');
    expect(wrapper.state('existingUser')).toEqual(false);
  });

  it('should call the createUser fetch when the login or submit user form is submitted', () => {
    const mockEvent = {
      preventDefault: jest.fn()
    }
    wrapper.instance().loginUser(mockEvent);
    expect(createUser).toHaveBeenCalled();
  });

  it('it calls dispatch with the setUser action', () => {
    const mockDispatch = jest.fn();
    const actionToDispatch = setUser(mockUser);
    const mappedProps = mapDispatchToProps(mockDispatch);
    mappedProps.setUser(mockUser);
    expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
  });
  
});
