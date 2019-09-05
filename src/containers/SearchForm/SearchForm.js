import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setBooks } from '../../actions';
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
    const { setBooks } = this.props;
    e.preventDefault();
    getBooks(searchInput)
      .then(books => setBooks(books.results))
      .catch(error => console.log(error))
  }

  render() {
    const { searchInput } = this.state;

    return (
      <form>
        <input
        type="text"
        name="searchInput"
        value={searchInput}
        onChange={this.handleChange}/>
        <button onClick={this.handleSearch}>Search</button>
      </form>
    )
  }
}

export const mapDispatchToProps = dispatch => (
  bindActionCreators({ setBooks }, dispatch)
)

export default connect(null, mapDispatchToProps)(SearchForm);
