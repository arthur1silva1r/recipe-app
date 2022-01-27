import PropTypes from 'prop-types';
import React, { useState } from 'react';
import MyContext from './MyContext';

function ContextProvider({ children }) {
  const [foodsState, setFoodState] = useState({});
  const [drinkState, setDrinkState] = useState({});
  const [userState, setUserState] = useState({});
  const [componentTitle, setComponentTitle] = useState('');

  const titleHandler = (name) => {
    setComponentTitle(name);
  };

  const providerObj = {
    foodsState,
    drinkState,
    userState,
    setDrinkState,
    setFoodState,
    setUserState,
    titleHandler,
    componentTitle,
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
