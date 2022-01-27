import React from 'react';

function SearchBar() {
  return (
    <div>
      <input
        type="text"
        name="foodSearch"
        data-testid="search-input"
      />

      <label htmlFor="searchChoice1">
        <input
          type="radio"
          id="searchChoice1"
          name="foodOption"
          value="ingredient"
          data-testid="ingredient-search-radio"
        />
        Ingredient
      </label>

      <label htmlFor="searchChoice2">
        <input
          type="radio"
          id="searchChoice2"
          name="foodOption"
          value="name"
          data-testid="name-search-radio"
        />
        Name
      </label>

      <label htmlFor="searchChoice3">
        <input
          type="radio"
          id="searchChoice3"
          name="foodOption"
          value="firstLetter"
          data-testid="first-letter-search-radio"
        />
        First Letter
      </label>

      <button
        type="button"
        data-testid="exec-search-btn"
      >
        Search
      </button>
    </div>
  );
}

export default SearchBar;
