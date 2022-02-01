import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import MyContext from '../MyContext';

export default function Cards() {
  const { listOfResults, componentTitle } = useContext(MyContext);
  let [id,
    // thumb, str
  ] = '';
  const MAX_ITEMS = 12;
  const url = componentTitle.toLowerCase();

  if (url === 'foods') {
    id = 'idMeal';
    // thumb = 'strMealThumb';
    // str = 'strMeal';
  } else if (url === 'drinks') {
    id = 'idDrink';
    // thumb = 'strDrinkThumb';
    // str = 'strDrink';
  }

  const mealContent = () => (
    <div>
      {
        listOfResults.map((element, index) => (
          <Link
            key={ element.strMeal }
            to={ `${url}/${element[id]}` }
          >
            <div
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
          </Link>
        ))
      }
    </div>
  );
  const drinkContent = () => (
    <div>
      {
        listOfResults.slice(0, MAX_ITEMS).map((element, index) => (
          <Link
            key={ element.strDrink }
            to={ `${url}/${element[id]}` }
          >
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
          </Link>
        ))
      }
    </div>
  );
  return (
    <div className="cards">
      {
        componentTitle === 'Foods' ? mealContent() : drinkContent()
      }
    </div>
  );
}
