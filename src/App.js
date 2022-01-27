import { Route, BrowserRouter, Switch } from 'react-router-dom';
import React from 'react';
import ContextProvider from './ContextProvider';
import './App.css';
import Login from './components/Login';
import 'bootstrap/dist/css/bootstrap.min.css';
import Explore from './pages/Explore';
import Foods from './pages/Foods';
import ExploreFoods from './pages/ExploreFoods';
import ExploreIngredients from './pages/ExploreIngredients';
import ExploreNationalities from './pages/ExploreNationalities';
import Details from './pages/Detalis';
import ProcessRecipe from './pages/ProcessRecipe';
import DoneRecipes from './pages/DoneRecipes';
import FavoriteRecipes from './pages/FavoriteRecipes';
import Profile from './pages/Profile';

function App() {
  return (
    <ContextProvider>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ Login } />
          <Route exact path="/profile" component={ Profile } />
          <Route exact path="/explore" component={ Explore } />
          <Route exact path="/foods" component={ Foods } />
          <Route exact path="/explore-foods" component={ ExploreFoods } />
          <Route exact path="/explore-ingredients" component={ ExploreIngredients } />
          <Route
            exact
            path="/explore-nationalities"
            component={ ExploreNationalities }
          />
          <Route exact path="/details" component={ Details } />
          <Route exact path="/process-recipe" component={ ProcessRecipe } />
          <Route exact path="/done-recipes" component={ DoneRecipes } />
          <Route exact path="/favorite-recipes" component={ FavoriteRecipes } />
        </Switch>
      </BrowserRouter>
    </ContextProvider>
  );
}

export default App;
