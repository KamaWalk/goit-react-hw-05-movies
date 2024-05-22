import React, { useState } from 'react';
import PropTypes from 'prop-types';
import css from './SearchForm.module.css';

function SearchForm({ onSubmit }) {
  const [keyword, setKeyword] = useState('');

  const handleSubmit = event => {
    event.preventDefault();
    onSubmit(keyword.trim());
  };

  return (
    <div className={css.inputDiv}>
      <form onSubmit={handleSubmit}>
        <input
          className={css.searchedMoviesInput}
          type="text"
          value={keyword}
          onChange={e => setKeyword(e.target.value)}
          placeholder="Enter search keyword"
        />
        <button className={css.searchedMoviesButton} type="submit">
          Search
        </button>
      </form>
    </div>
  );
}

SearchForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default SearchForm;