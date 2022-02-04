import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import '../ByNationalities.css';
import MyContext from '../MyContext';
import { fetchCountries, fetchByNationality, searchFoods } from '../services/fetch';
import Cards from './Cards';

export default function ByNationalities() {
  const { setList } = useContext(MyContext);
  const [options, setOptions] = useState([]);
  const [currentOption, setCurrentOption] = useState('All');
  const [foods, setFoods] = useState([]);

  const getOptions = async () => {
    if (currentOption === 'All') {
      const result = await searchFoods('nationality');
      const fetchOptions = await fetchCountries();
      setOptions(fetchOptions.meals);
      return setList(result.meals);
    }
    const fetchFoods = await fetchByNationality(currentOption);
    setFoods(fetchFoods.meals);
  };

  const selectHandler = async ({ target }) => {
    const { value } = target;
    setCurrentOption(value);
    const fetchFoods = await fetchByNationality(value);
    setFoods(fetchFoods.meals);
  };

  useEffect(() => {
    getOptions();
  }, []);

  return (
    <div className="ByNationality">
      Nationalities
      <select
        onChange={ selectHandler }
        data-testid="explore-by-nationality-dropdown"
      >
        <option data-testid="All-option" value="All">All</option>
        {
          options.map((element) => (
            <option
              key={ element.strArea }
              data-testid={ `${element.strArea}-option` }
              value={ element.strArea }
            >
              {element.strArea}
            </option>
          ))
        }
      </select>
      <div className="foods-byNationality">
        { currentOption === 'All' ? <Cards />
          : foods.length > 0 && foods.slice(0, +'12').map((element, index) => (
            <Link key={ element.strMeal } to={ `/foods/${element.idMeal}` }>
              <div data-testid={ `${index}-recipe-card` } key={ element.strMeal }>
                <img
                  data-testid={ `${index}-card-img` }
                  src={ element.strMealThumb }
                  alt={ element.strMeal }
                />
                <h3 data-testid={ `${index}-card-name` }>{element.strMeal}</h3>
              </div>
            </Link>
          ))}
      </div>
    </div>
  );
}
