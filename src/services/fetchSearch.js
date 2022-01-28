export async function searchFoods(foodOption, input) {
  switch (foodOption) {
  case 'ingredient': {
    const fetchByIngredient = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${input}`)
      .then((response) => response.json());
    console.log(fetchByIngredient);
    break;
  }
  case 'name': {
    const fetchByName = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${input}`)
      .then((response) => response.json());
    console.log(fetchByName);
    break;
  }
  case 'firstLetter': {
    if (input.length > 1) {
      global.alert('Your search must have only 1 (one) character');
      break;
    }
    const fetchByFirstLetter = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${input}`)
      .then((response) => response.json());
    console.log(fetchByFirstLetter);
    break;
  }
  default:
    break;
  }
}

export async function searchDrinks(foodOption, input) {
  switch (foodOption) {
  case 'ingredient': {
    const fetchByIngredient = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${input}`)
      .then((response) => response.json());
    console.log(fetchByIngredient);
    break;
  }
  case 'name': {
    const fetchByName = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${input}`)
      .then((response) => response.json());
    console.log(fetchByName);
    break;
  }
  case 'firstLetter': {
    if (input.length > 1) {
      global.alert('Your search must have only 1 (one) character');
      break;
    }
    const fetchByFirstLetter = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${input}`)
      .then((response) => response.json());
    console.log(fetchByFirstLetter);
    break;
  }
  default:
    break;
  }
}
