import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Searchbar extends Component {
  state = {
    keyword: '',
  };
  submitForm = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state.keyword);
  };

  onChange = (e) => {
    this.setState({
      keyword: e.target.value,
    });
  };

  render() {
    return (
      <header className='Searchbar'>
        <form className='SearchForm' onClick={this.submitForm}>
          <button type='submit' className='SearchForm-button'>
            <span className='SearchForm-button-label'>Search</span>
          </button>
          <input
            onChange={this.onChange}
            className='SearchForm-input'
            type='text'
            autoComplete='off'
            autoFocus
            placeholder='Search images and photos'
          />
        </form>
      </header>
    );
  }
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func,
};

export default Searchbar;
