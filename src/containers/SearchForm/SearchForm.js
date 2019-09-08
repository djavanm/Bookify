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
    const { setBooks, showStart, length } = this.props;
    e.preventDefault();
    getBooks(searchInput)
      .then(books => setBooks(books))
      .catch(error => console.log(error))
    this.setState({
      searchInput: ''
    })
    showStart({start: 0, end: 10, length: length})
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

export const mapStateToProps = state => ({
  length: state.currentBooks.length
})

export const mapDispatchToProps = dispatch => (
  bindActionCreators({ setBooks, showStart }, dispatch)
)

export default connect(mapStateToProps, mapDispatchToProps)(SearchForm);
