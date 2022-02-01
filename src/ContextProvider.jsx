import React, { useState } from 'react';
import PropTypes from 'prop-types';
import MyContext from './MyContext';

function ContextProvider({ children }) {
  const [foodsState, setFoodState] = useState({});
  const [drinkState, setDrinkState] = useState({});
  const [componentTitle, setComponentTitle] = useState('');
  const [searchedFood, setSearchedFood] = useState({});
  const [listOfResults, setListOfResults] = useState([]);
  const [searchResults, setSearchResults] = useState();
  const [arrayCategories, setArrayCategories] = useState([]);
  const [details, setDetails] = useState();
  const [recommended, setRecommended] = useState();

  const recommendedHandler = (obj) => {
    setRecommended(obj);
  };

  const detailsHandler = (obj) => {
    setDetails(obj);
  };

  const searchedFoodHandler = (obj) => {
    setSearchedFood(obj);
  };

  const titleHandler = (name) => {
    setComponentTitle(name);
  };

  const setList = (array) => {
    setListOfResults(array);
  };

  const providerObj = {
    searchedFood,
    foodsState,
    drinkState,
    listOfResults,
    componentTitle,
    details,
    recommended,
    recommendedHandler,
    detailsHandler,
    setDrinkState,
    setFoodState,
    titleHandler,
    setList,
    searchedFoodHandler,
    searchResults,
    setSearchResults,
    arrayCategories,
    setArrayCategories,
  };

  return (
    <MyContext.Provider value={ providerObj }>
      { children }
    </MyContext.Provider>
  );
}

ContextProvider.propTypes = {
  children: PropTypes.any,
}.isRequired;

export default ContextProvider;
