import React, { Component } from 'react';

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

  render() {
    const { searchInput } = this.state;
    
    return (
      <form>
        <input 
        type="text" 
        name="searchInput"
        value={searchInput}
        onChange={this.handleChange}/>
        <button>Search</button>
      </form>
    )
  }
}

export default SearchForm;