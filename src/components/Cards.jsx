import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import MyContext from '../MyContext';

export default function Cards() {
  const { listOfResults, ingredient, componentTitle } = useContext(MyContext);
  let [id, thumb, str] = '';
  const MAX_ITEMS = 12;
  const url = componentTitle.toLowerCase();
  console.log(url);

  if (url === 'foods' || url === 'explore nationalities') {
    id = 'idMeal';
    thumb = 'strMealThumb';
    str = 'strMeal';
  } else if (url === 'drinks') {
    id = 'idDrink';
    thumb = 'strDrinkThumb';
    str = 'strDrink';
  }

  function allCards() {
    return (
      <div className="cards">
        {
          listOfResults.slice(0, MAX_ITEMS).map((element, index) => (
            <Link
              key={ element[str] }
              to={
                url === 'explore nationalities' ? (
                  `/foods/${element[id]}`
                ) : (`${url}/${element[id]}`)
              }
            >
              <div
                key={ element[str] }
                data-testid={ `${index}-recipe-card` }
              >
                <img
                  data-testid={ `${index}-card-img` }
                  src={ element[thumb] }
                  alt="recipe-thumbnail"
                  width="300px"
                />
                <h1 data-testid={ `${index}-card-name` }>{element[str]}</h1>
              </div>
            </Link>
          ))
        }
      </div>
    );
  }

  function filterByIngredient() {
    console.log('filter');
    return (
      <div className="cards">
        {
          ingredient.slice(0, MAX_ITEMS).map((element, index) => (
            <Link
              key={ element[str] }
              to={ `${url}/${element[id]}` }
            >
              <div
                key={ element[str] }
                data-testid={ `${index}-recipe-card` }
                className="filtered"
              >
                <img
                  data-testid={ `${index}-card-img` }
                  src={ element[thumb] }
                  alt="recipe-thumbnail"
                  width="300px"
                />
                <h1 data-testid={ `${index}-card-name` }>{element[str]}</h1>
              </div>
            </Link>
          ))
        }
      </div>
    );
  }

  return ingredient.length > 0 ? filterByIngredient() : allCards();
}
