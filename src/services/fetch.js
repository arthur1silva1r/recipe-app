export async function searchFoods(foodOption, input) {
  switch (foodOption) {
  case 'ingredient': {
    const fetchByIngredient = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${input}`)
      .then((response) => response.json());
    return fetchByIngredient;
  }
  case 'name': {
    const fetchByName = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${input}`)
      .then((response) => response.json());
    return fetchByName;
  }
  case 'firstLetter': {
    if (input.length > 1) {
      global.alert('Your search must have only 1 (one) character');
      break;
    }
    const fetchByFirstLetter = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${input}`)
      .then((response) => response.json());
    return fetchByFirstLetter;
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
    return fetchByIngredient;
  }
  case 'name': {
    const fetchByName = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${input}`)
      .then((response) => response.json());
    return fetchByName;
  }
  case 'firstLetter': {
    if (input.length > 1) {
      global.alert('Your search must have only 1 (one) character');
      break;
    }
    const fetchByFirstLetter = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${input}`)
      .then((response) => response.json());
    return fetchByFirstLetter;
  }
  default:
    break;
  }
}

export async function fetchDetails(id, category) {
  if (category === 'foods') {
    const result = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
      .then((response) => response.json());
    return result;
  }
  const result = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
    .then((response) => response.json());
  return result;
}

export async function fetchRecommended(category) {
  if (category === 'foods') {
    const result = await fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=')
      .then((response) => response.json());
    return result;
  }
  const result = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=')
    .then((response) => response.json());
  return result;
}
