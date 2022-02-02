import React, { useContext } from 'react';
import MyContext from '../MyContext';
import '../ProgressRecipe.css';

export default function IngredientsProgress() {
  const { ingredientsProgress } = useContext(MyContext);

  const ingredientsContent = () => {
    const ingredients = [];
    const measures = [];
    if (ingredientsProgress) {
      const NUMBER_OF_INGREDIENTS = 20;
      const recipe = ingredientsProgress[Object.keys(ingredientsProgress)][0];
      for (let i = 1; i <= NUMBER_OF_INGREDIENTS; i += 1) {
        if (recipe[`strIngredient${i}`]) {
          ingredients.push(recipe[`strIngredient${i}`]);
          measures.push(recipe[`strMeasure${i}`]);
        }
      }
    }

    const toggleChecked = ({ target }) => {
      console.log(target.parentNode);
      if (target.checked === true) {
        target.parentNode.setAttribute('class', 'checked');
        localStorage.setItem(`${target.id}`, true);
      } else {
        target.parentNode.classList.remove('checked');
        localStorage.setItem(`${target.id}`, false);
      }

      /* const item = document.getElementById(`ingredient-item-${ingredient}`);
      const listClass = item.classList;
      const checkbox = document.getElementById(`checkbox${index}`);
      if (listClass.contains('checked')) {
        item.className = '';
        localStorage.setItem(`checkbox${index}`, checkbox.checked);
      } else {
        item.className = 'checked';
        localStorage.setItem(`checkbox${index}`, checkbox.checked);
      }
      */
    };

    return (
      <ul>
        { ingredients.map((ingredient, index) => {
          const isChecked = JSON.parse(localStorage.getItem(`checkbox${index}`));
          console.log(isChecked);
          return (
            <li
              id={ `ingredient-item-${ingredient}` }
              key={ index }
              data-testid={ `${index}-ingredient-step` }
              className={ isChecked ? 'checked' : '' }
            >
              <input
                type="checkbox"
                id={ `checkbox${index}` }
                index={ index }
                onChange={ toggleChecked }
                defaultChecked={ isChecked }
              />
              { `${ingredient}: ${measures[index]}` }
            </li>
          );
        }) }
      </ul>
    );
  };

  return (
    <div>
      { ingredientsProgress && ingredientsContent() }
    </div>
  );
}
