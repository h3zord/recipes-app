import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Recipes from './components/Recipes';
import DoneRecipes from './pages/DoneRecipes';
import FavoriteRecipes from './pages/FavoriteRecipes';
import Profile from './pages/Profile';
import RecipeDetails from './pages/RecipeDetails';
import RecipeInProgress from './pages/RecipeInProgress';
import Config from './pages/Config';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={ Config } />
      <Route exact path="/foods" component={ Recipes } />
      <Route exact path="/drinks" component={ Recipes } />
      <Route exact path="/foods/:id" component={ RecipeDetails } />
      <Route exact path="/drinks/:id" component={ RecipeDetails } />
      <Route exact path="/foods/:id/in-progress" component={ RecipeInProgress } />
      <Route exact path="/drinks/:id/in-progress" component={ RecipeInProgress } />
      <Route exact path="/done-recipes" component={ DoneRecipes } />
      <Route exact path="/favorite-recipes" component={ FavoriteRecipes } />
      <Route exact path="/profile" component={ Profile } />
    </Switch>
  );
}

export default App;
