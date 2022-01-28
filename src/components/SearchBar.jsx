import React, { useState, useContext } from 'react';
import MyContext from '../MyContext';
import { searchFoods, searchDrinks } from '../services/fetchSearch';

const INITIAL_SEARCH_STATE = {
  input: '',
  foodOption: '',
};

function SearchBar() {
  const [searchState, setSearchState] = useState(INITIAL_SEARCH_STATE);
  const { componentTitle } = useContext(MyContext);
  const inputHandler = ({ target }) => {
    const { name, value } = target;
    setSearchState({ ...searchState, [name]: value });
  };

  function submitHandler() {
    const { foodOption, input } = searchState;
    switch (componentTitle) {
    case 'Foods':
      searchFoods(foodOption, input);
      break;
    case 'Drinks':
      searchDrinks(foodOption, input);
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
