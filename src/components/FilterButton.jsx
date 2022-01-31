import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import MyContext from '../MyContext';

export default function FilterButton() {
  const history = useHistory();
  const { arrayCategories } = useContext(MyContext);

  const urlLocal = history.location.pathname;

  let foodCategories = '';

  if (urlLocal === '/foods') {
    foodCategories = 'meals';
  } else if (urlLocal === '/drinks') {
    foodCategories = 'drinks';
  }

  return (
    <div className="categoryBar">
      {
        (arrayCategories[foodCategories])
          ? arrayCategories[foodCategories].slice(0, +'5').map((acc, index) => (
            <button
              key={ index }
              type="button"
              data-testid={ `${acc.strCategory}-category-filter` }
            >
              {acc.strCategory}
            </button>
          ))
          : console.log(arrayCategories)
      }
    </div>
  );
}
