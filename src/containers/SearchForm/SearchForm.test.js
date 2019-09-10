import React from 'react';
import { shallow } from 'enzyme';
import { SearchForm } from './SearchForm';
import { getBooks } from '../../util/apiCalls';

jest.mock('../../util/apiCalls');

getBooks.mockImplementation(() => {
  return Promise.resolve({
    id: 1,
    book_id: 1,
    author_name: 'Djavan',
    book_name: 'How to do apiCalls, version 1',
    artwork_url: 'image string that goes here',
    release_date: '9999',
    description: 'The description on this is so descriptive',
    primary_genre_name: 'Loud'
  })
});

describe('SearchForm', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<SearchForm />)
  });

  it('should match the snapshot with the data passed through', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should update the state when handle change is called', () => {
    const mockEvent = {
      target: {
        name: 'searchInput',
        value: 'harry potter'
      }
    };
    const expectedSearch = 'harry potter';
     wrapper.instance().handleChange(mockEvent);
     expect(wrapper.state('searchInput')).toEqual(expectedSearch);
  });

  it('should call the getBooks fetch when the search form is submitted', () => {
    const mockEvent = {
      preventDefault: jest.fn()
    }
    wrapper.instance().handleSearch(mockEvent);
    expect(getBooks).toHaveBeenCalled();
  });
});
