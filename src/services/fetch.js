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

export async function searchCategory(url) {
  switch (url) {
  case '/foods': {
    const fetchByFirstLetter = await fetch('https://www.themealdb.com/api/json/v1/1/list.php?c=list')
      .then((response) => response.json());
    return fetchByFirstLetter;
  }
  case '/drinks': {
    const fetchByFirstLetter = await fetch('https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list')
      .then((response) => response.json());
    return fetchByFirstLetter;
  }
  default:
    break;
  }
}

export async function FilterByButton(category, url) {
  console.log(category);
  switch (url) {
  case 'foods': {
    console.log('comida');
    const fetchByF = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`)
      .then((response) => response.json());
    console.log(fetchByF);
    return fetchByF;
  }
  case 'drinks': {
    console.log('bebida');
    const fetchByFilterDrinks = await fetch(
      `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${category}`,
    )
      .then((response) => response.json());
    return fetchByFilterDrinks;
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
