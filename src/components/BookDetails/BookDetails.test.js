import BookDetails from './BookDetails';
import React from 'react';
import { shallow } from 'enzyme';

describe('BookDetails', () => {
  it('should match the snapshot with all of the data passed through', () => {
    const detailsMock = {
      currentUser: '',
      book_name: '',
      description: '',
      release_date: '2019/09/08T24234',
      primary_genre_name: ''
    }
    const wrapper = shallow(<BookDetails {...detailsMock}/>)

    expect(wrapper).toMatchSnapshot();
  });
});