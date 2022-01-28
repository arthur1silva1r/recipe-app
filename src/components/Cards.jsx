import React, { useContext } from 'react';
import MyContext from '../MyContext';

export default function Cards() {
  const { listOfResults, componentTitle } = useContext(MyContext);
  const MAX_ITEMS = 12;
  const mealContent = () => (
    <div>
      {
        listOfResults.map((element, index) => (
          <div
            key={ element.strMeal }
            data-testid={ `${index}-recipe-card` }
          >
            <img
              data-testid={ `${index}-card-img` }
              src={ element.strMealThumb }
              alt="recipe-thumbnail"
              width="300px"
            />
            <h1 data-testid={ `${index}-card-name` }>{element.strMeal}</h1>
          </div>
        ))
      }
    </div>
  );
  const drinkContent = () => (
    <div>
      {
        listOfResults.slice(0, MAX_ITEMS).map((element, index) => (
          <div
            key={ element.strDrink }
            data-testid={ `${index}-recipe-card` }
          >
            <img
              data-testid={ `${index}-card-img` }
              src={ element.strDrinkThumb }
              alt="recipe-thumbnail"
              width="300px"
            />
            <h1 data-testid={ `${index}-card-name` }>{element.strDrink}</h1>
          </div>
        ))
      }
    </div>
  );
  return (
    <div>
      {
        componentTitle === 'Foods' ? mealContent() : drinkContent()
      }
    </div>
  );
}
