import React from 'react';
import { shallow } from 'enzyme';
import { LoginForm } from './LoginForm';

describe('LoginForm', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(<LoginForm />)
  })

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  })
})