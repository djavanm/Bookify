import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setBooks, showStart } from '../../actions';
import { getBooks } from '../../util/apiCalls'

class SearchForm extends Component {
  constructor() {
    super();
    this.state = {
      searchInput: ''
    }
  }

  handleChange = (e) => {
    this.setState({[e.target.name]: [e.target.value]});
  }

  handleSearch = (e) => {
    const { searchInput } = this.state;
    const { setBooks, showStart } = this.props;
    e.preventDefault();
    getBooks(searchInput)
      .then(books => setBooks(books))
      .then(data => showStart({start: 0, end: 10, length: data.foundBooks.length}))
      .catch(error => console.log(error))
    this.setState({
      searchInput: ''
    })
  }

  render() {
    const { searchInput } = this.state;

    return (
      <form className='search-form'>
        <input
        className='search-input'
        type="text"
        name="searchInput"
        value={searchInput}
        placeholder='Audiobook or Author'
        onChange={this.handleChange}/>
        <button className='search-btn' onClick={this.handleSearch}>Search</button>
      </form>
    )
  }
}

export const mapDispatchToProps = dispatch => (
  bindActionCreators({ setBooks, showStart }, dispatch)
)

export default connect(null, mapDispatchToProps)(SearchForm);
