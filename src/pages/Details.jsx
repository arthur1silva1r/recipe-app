import React, { useEffect, useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import MyContext from '../MyContext';
import {
  fetchDetails,
  fetchRecommended,
  createRecipe,
  alteraIcon,
} from '../services/fetch';
import IngredientsList from '../components/IngredientsList';
import RecommendedCards from '../components/RecommendedCards';
import '../Recipes.css';
import shareIcon from '../images/shareIcon.svg';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';
import blackHeartIcon from '../images/blackHeartIcon.svg';

const msg = 'Link copied!';

export default function Details() {
  const { detailsHandler, recommendedHandler } = useContext(MyContext);
  const history = useHistory();
  const { pathname } = history.location;
  const [details, setDetails] = useState();
  const [showTag, setShowTag] = useState(false);
  const [favorite, setFavorite] = useState('');

  useEffect(() => {
    // const NUMBER_OF_CHARACTERS = 1;
    const path = pathname.includes('foods') ? 'foods' : 'drinks';
    const arrayId = pathname.split('/');
    const id = arrayId[arrayId.length - 1];

    (async () => {
      const result = await fetchDetails(id, path);
      const recommendedResults = await fetchRecommended(path);
      recommendedHandler(recommendedResults);
      setDetails(result);
      const icone = alteraIcon(pathname, result);
      setFavorite(icone);
      detailsHandler(result);
    })();
  }, []);

  const copyHandler = () => {
    console.log(pathname);
    navigator.clipboard.writeText(`http://localhost:3000${pathname}`);
    global.alert(msg);
    setShowTag(true);
  };

  function changeSrc() {
    const btnFav = document.getElementById('favorite-btn');
    const imagemIcone = document.getElementById('iconeFav');
    if (favorite === whiteHeartIcon) {
      setFavorite(blackHeartIcon);
      imagemIcone.setAttribute('src', blackHeartIcon);
      btnFav.setAttribute('src', 'blackHeartIcon');
    } else if (favorite === blackHeartIcon) {
      setFavorite(whiteHeartIcon);
      imagemIcone.setAttribute('src', whiteHeartIcon);
      btnFav.setAttribute('src', 'whiteHeartIcon');
    }
  }

  const toggleFavorite = () => {
    createRecipe(details);
    changeSrc();
  };

  const mealContent = () => {
    if (details) {
      const { meals } = details;
      const infos = meals[0];
      const {
        idMeal,
        strMealThumb,
        strMeal,
        strCategory,
        strInstructions,
        strYoutube,
      } = infos;

      return (
        <div>
          <img
            src={ strMealThumb }
            alt="Recipe"
            data-testid="recipe-photo"
            id="recipe-image"
          />
          <h3 data-testid="recipe-title">
            { strMeal }
          </h3>
          <button
            type="button"
            data-testid="share-btn"
            onClick={ copyHandler }
          >
            <img src={ shareIcon } alt="share button" />
          </button>
          <span>{ showTag && msg }</span>

          <button
            type="button"
            id="favorite-btn"
            name="favorite-btn"
            data-testid="favorite-btn"
            onClick={ toggleFavorite }
            src="whiteHeartIcon"
          >
            <img id="iconeFav" src={ favorite } alt="favorite btn" />
          </button>

          <p data-testid="recipe-category">
            { strCategory }
          </p>
          <h3>Ingredientes</h3>
          <IngredientsList />
          <p data-testid="instructions">
            { strInstructions }
          </p>
          <iframe // https://github.com/tryber/sd-016-b-project-recipes-app/pull/315/commits/9436856721a27b22c91209e1e5f49b7f99a7a7f4]
            title="Youtube Player"
            data-testid="video"
            width="340"
            frameBorder="0"
            src={ strYoutube.replace('watch?v=', 'embed/') }
          />
          <RecommendedCards />
          <button
            type="button"
            data-testid="start-recipe-btn"
            className="start-recipe"
            onClick={ () => history.push(`/foods/${idMeal}/in-progress`) }
          >
            Iniciar receita
          </button>
        </div>
      );
    }
  };

  const drinkContent = () => {
    console.log(details);
    if (details) {
      const { drinks } = details;
      const infos = drinks[0];
      const {
        idDrink,
        strDrinkThumb,
        strDrink,
        strInstructions,
        strAlcoholic,
      } = infos;

      return (
        <div>
          <img
            src={ strDrinkThumb }
            alt="Recipe"
            data-testid="recipe-photo"
            id="recipe-image"
          />
          <h3 data-testid="recipe-title">
            { strDrink }
          </h3>
          <button
            type="button"
            data-testid="share-btn"
            onClick={ copyHandler }
          >
            <img src={ shareIcon } alt="share button" />
          </button>
          <span>{ showTag && msg }</span>

          <button
            type="button"
            data-testid="favorite-btn"
            onClick={ toggleFavorite }
            id="favorite-btn"
          >
            <img id="iconeFav" src={ favorite } alt="Favorite Button" />
          </button>

          <p data-testid="recipe-category">
            { strAlcoholic }
          </p>
          <h3>Ingredientes</h3>
          <IngredientsList />
          <p data-testid="instructions">
            { strInstructions }
          </p>
          <RecommendedCards />
          <button
            type="button"
            data-testid="start-recipe-btn"
            className="start-recipe"
            onClick={ () => history.push(`/drinks/${idDrink}/in-progress`) }
          >
            Iniciar receita
          </button>
        </div>
      );
    }
  };

  return (
    <div>
      { pathname.includes('foods') ? mealContent() : drinkContent() }
    </div>
  );
}
