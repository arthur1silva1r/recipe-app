import PropTypes from 'prop-types';
import React, { useState } from 'react';
import MyContext from './MyContext';

const USER_INITIAL_STATE = {
  email: 'teste@gmail.com',
  senha: '',
};
function ContextProvider({ children }) {
  const [foodsState, setFoodState] = useState({});
  const [drinkState, setDrinkState] = useState({});
  const [userState, setUserState] = useState(USER_INITIAL_STATE);

  const providerObj = {
    foodsState,
    drinkState,
    userState,
    setDrinkState,
    setFoodState,
    setUserState,
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
