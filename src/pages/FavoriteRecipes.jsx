import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import MyContext from '../MyContext';
import '../FavoriteRecipe.css';

const linkCopied = 'Link copied!';
export default function FavoriteRecipes() {
  const [favorite, setFavorite] = useState([]);
  const [showTag, setShowTag] = useState(false);
  const [justFood, setJustFood] = useState(false);
  const [justDrink, setJustDrink] = useState(false);
  const [allFavorite, setAllFavorite] = useState(true);
  const name = 'Favorite Recipes';

  useEffect(() => {
    const favoriteStorage = JSON.parse(localStorage.getItem('favoriteRecipes'));
    setFavorite(favoriteStorage);
  }, []);

  const { titleHandler } = useContext(MyContext);
  useEffect(() => {
    titleHandler(name);
  }, [titleHandler]);

  const copyHandler = (type, id) => {
    navigator.clipboard.writeText(`http://localhost:3000/${type}s/${id}`);
    setShowTag(true);
  };

  const teste1 = () => {
    setAllFavorite(false);
    setJustDrink(false);
    setJustFood(true);
  };

  const teste2 = () => {
    setAllFavorite(false);
    setJustFood(false);
    setJustDrink(true);
  };

  const teste3 = () => {
    setJustFood(false);
    setJustDrink(false);
    setAllFavorite(true);
  };

  function byDrink() {
    const arrayDrinks = favorite.filter((element) => element.type === 'drink');
    console.log('drink');
    return (
      arrayDrinks.map((element, index) => (
        <div key={ element.name }>
          <Link to={ `/${element.type}s/${element.id}` }>
            <div>
              <img
                data-testid={ `${index}-horizontal-image` }
                src={ element.image }
                alt={ element.name }
              />
              <h3 data-testid={ `${index}-horizontal-name` }>{ element.name }</h3>
              <h3
                data-testid={ `${index}-horizontal-top-text` }
              >
                {element.category}
              </h3>
            </div>
          </Link>
          <button
            type="button"
            data-testid={ `${index}-horizontal-favorite-btn` }
          >
            Favorite
          </button>
          <button
            type="button"
            data-testid={ `${index}-horizontal-share-btn` }
            onClick={ () => copyHandler(element.type, element.id) }
          >
            Share
          </button>
          <p>{ showTag && linkCopied }</p>
        </div>
      ))
    );
  }

  function byFood() {
    const arrayFoods = favorite.filter((element) => element.type === 'food');
    return (
      arrayFoods.map((element, index) => (
        <div key={ element.id }>
          <Link to={ `/${element.type}s/${element.id}` }>
            <div>
              <img
                data-testid={ `${index}-horizontal-image` }
                src={ element.image }
                alt={ element.name }
              />
              <h3 data-testid={ `${index}-horizontal-name` }>{ element.name }</h3>
              <h3
                data-testid={ `${index}-horizontal-top-text` }
              >
                {element.category}
              </h3>
            </div>
          </Link>
          <button
            type="button"
            data-testid={ `${index}-horizontal-favorite-btn` }
          >
            Favorite
          </button>
          <button
            type="button"
            data-testid={ `${index}-horizontal-share-btn` }
            onClick={ () => copyHandler(element.type, element.id) }
          >
            Share
          </button>
          <p>{ showTag && linkCopied }</p>
        </div>
      ))
    );
  }

  function All() {
    return (
      allFavorite && favorite.map((element, index) => (
        <div key={ element.name }>
          <Link to={ `/${element.type}s/${element.id}` }>
            <div>
              <img
                data-testid={ `${index}-horizontal-image` }
                src={ element.image }
                alt={ element.name }
              />
              <h3 data-testid={ `${index}-horizontal-name` }>{ element.name }</h3>
              <h3
                data-testid={ `${index}-horizontal-top-text` }
              >
                {element.category}
              </h3>
            </div>
          </Link>
          <button
            type="button"
            data-testid={ `${index}-horizontal-favorite-btn` }
          >
            Favorite
          </button>
          <button
            type="button"
            data-testid={ `${index}-horizontal-share-btn` }
            onClick={ () => copyHandler(element.type, element.id) }
          >
            Share
          </button>
          <p>{ showTag && 'Link copied!' }</p>
        </div>
      ))
    );
  }

  return (
    <div>
      <Header />
      <div className="favorite-recipes">
        <div className="filter-buttons">
          <button
            type="button"
            data-testid="filter-by-all-btn"
            onClick={ teste3 }
          >
            All
          </button>
          <button
            type="button"
            data-testid="filter-by-food-btn"
            onClick={ teste1 }
          >
            By Food
          </button>
          <button
            type="button"
            data-testid="filter-by-drink-btn"
            onClick={ teste2 }
          >
            By Drink
          </button>
        </div>
        {justFood && byFood()}
        {justDrink && allFavorite === false ? byDrink() : ''}
        { allFavorite && justFood === false ? All() : '' }
      </div>
    </div>
  );
}
