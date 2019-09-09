import React from 'react';
import { shallow } from 'enzyme';
import { SearchForm } from './SearchForm';

describe('SearchForm', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(<SearchForm />)
  })
  
  it('should match the snapshot with the data passed through', () => {
    expect(wrapper).toMatchSnapshot();
  })
})