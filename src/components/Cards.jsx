import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import MyContext from '../MyContext';

export default function Cards() {
  const { listOfResults, componentTitle } = useContext(MyContext);
  let [id, thumb, str] = '';
  const MAX_ITEMS = 12;
  const url = componentTitle.toLowerCase();

  if (url === 'foods') {
    id = 'idMeal';
    thumb = 'strMealThumb';
    str = 'strMeal';
  } else if (url === 'drinks') {
    id = 'idDrink';
    thumb = 'strDrinkThumb';
    str = 'strDrink';
  }

  return (
    <div className="cards">
      {
        listOfResults.slice(0, MAX_ITEMS).map((element, index) => (
          <Link
            key={ element[str] }
            to={ `${url}/${element[id]}` }
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
