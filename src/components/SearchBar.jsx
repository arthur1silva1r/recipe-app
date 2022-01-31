import React, { useState, useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import MyContext from '../MyContext';
import { searchFoods, searchDrinks } from '../services/fetchSearch';

const INITIAL_SEARCH_STATE = {
  input: '',
  foodOption: '',
};

function SearchBar() {
  const [searchResults, setSearchResults] = useState();
  const [searchState, setSearchState] = useState(INITIAL_SEARCH_STATE);
  const { componentTitle, setList } = useContext(MyContext);
  const history = useHistory();
  const inputHandler = ({ target }) => {
    const { name, value } = target;
    setSearchState({ ...searchState, [name]: value });
  };
  // console.log(searchResults);

  useEffect(() => {
    // console.log('Teste');
    if (searchResults) {
      const key = Object.keys(searchResults)[0];
      // const { location: { pathname } } = history;
      if (searchResults[key] && searchResults[key].length === 1) {
        const key2 = Object.keys(searchResults)[0];
        const key3 = Object.values(searchResults[key2][0])[0];
        // history.push(`${pathname}/${key3}`);
        history.push(`/details/${key3}`);
      } else if (searchResults[key] && searchResults[key].length > 1) {
        setList(Object.values(searchResults)[0]);
      } else {
        global.alert('Sorry, we haven\'t found any recipes for these filters.');
      }
    }
  }, [searchResults, history, setList]);

  async function submitHandler() {
    const { foodOption, input } = searchState;
    switch (componentTitle) {
    case 'Foods': {
      const foodResults = await searchFoods(foodOption, input);
      setSearchResults(foodResults);
      break;
    }
    case 'Drinks': {
      const drinksResult = await searchDrinks(foodOption, input);
      setSearchResults(drinksResult);
      break;
    }
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
