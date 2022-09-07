import React from 'react';
import PropTypes from 'prop-types';

const Searchbar = ({ setKeyword }) => {
  return (
    <header className='Searchbar'>
      <form className='SearchForm' onSubmit={event => event.preventDefault()}>
        <button type='submit' className='SearchForm-button'>
          <span className='SearchForm-button-label'>Search</span>
        </button>
        <input
          onChange={(e) => setKeyword(e.target.value)}
          className='SearchForm-input'
          type='text'
          autoComplete='off'
          autoFocus
          placeholder='Search images and photos'
        />
      </form>
    </header>
  );
};

Searchbar.propTypes = {
  setKeyword: PropTypes.func,
};

export default Searchbar;
