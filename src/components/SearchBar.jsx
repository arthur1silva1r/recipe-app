import React, { useState } from 'react';

const INITIAL_SEARCH_STATE = {
  input: '',
  foodOption: '',
};

function SearchBar() {
  const [searchState, setSearchState] = useState(INITIAL_SEARCH_STATE);

  const inputHandler = ({ target }) => {
    const { name, value } = target;
    setSearchState({ ...searchState, [name]: value });
  };

  async function submitHandler() {
    const { foodOption, input } = searchState;
    switch (foodOption) {
    case 'ingredient': {
      console.log('ingrediente');
      const fetchByIngredients = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${input}`)
        .then((response) => response.json());
      console.log(fetchByIngredients);
    }
      break;
    case 'name': {
      const fetchByName = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${input}`)
        .then((response) => response.json());
      console.log(fetchByName);
      /* if (fetchByName.meals) {

      } */
    }
      break;
    case 'firstLetter': {
      if (input.length > 1) {
        global.alert('Your search must have only 1 (one) character');
        break;
      }
      const fetchByFirstLetter = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${input}`)
        .then((response) => response.json());
      console.log(fetchByFirstLetter);
    }
      break;
    default:
      break;
    }
  }

  return (
    <div>
      <input
        type="text"
        name="input"
        data-testid="search-input"
        value={ searchState.input }
        onChange={ inputHandler }
      />

      <label htmlFor="searchChoice1">
        <input
          type="radio"
          id="searchChoice1"
          name="foodOption"
          value="ingredient"
          data-testid="ingredient-search-radio"
          onChange={ inputHandler }
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
          onChange={ inputHandler }
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
          onChange={ inputHandler }
        />
        First Letter
      </label>

      <button
        type="button"
        data-testid="exec-search-btn"
        onClick={ submitHandler }
      >
        Search
      </button>
    </div>
  );
}

export default SearchBar;
