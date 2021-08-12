import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import Explore from './pages/Explore';
import ExploreDrink from './pages/ExploreDrink';
import ExploreFood from './pages/ExploreFood';
import FoodArea from './pages/FoodArea';
import Login from './pages/Login';
import Meals from './pages/Meals';
import Profile from './pages/Profile';
import MealDetails from './pages/MealDetails';
import DrinkDetails from './pages/DrinkDetails';
import Drinks from './pages/Drinks';
import ExploreDrinkIngredient from './pages/ExploreDrinkIngredient';
import ExploreFoodIngredient from './pages/ExploreFoodIngredient';
import NotFound from './pages/NotFound';
import RecipesMade from './pages/RecipesMade';
import RecipesFavorites from './pages/RecipesFavorites';
// import MealRecipeCard from './components/MealRecipeCard';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ Login } />
        <Route exact path="/explorar" component={ Explore } />
        <Route exact path="/explorar/comidas/area" component={ FoodArea } />
        <Route exact path="/explorar/comidas" component={ ExploreFood } />
        <Route exact path="/explorar/bebidas" component={ ExploreDrink } />
        <Route exact path="/comidas/:id" component={ MealDetails } />
        <Route exact path="/perfil" component={ Profile } />
        <Route path="/bebidas/:id" component={ DrinkDetails } />
        <Route path="/comidas" component={ Meals } />
        <Route path="/bebidas" component={ Drinks } />
        {/* <Route path="/profile" component={ Profile } /> */}

        <Route
          exact
          path="/explorar/comidas/ingredientes"
          component={ ExploreFoodIngredient }
        />
        <Route
          exact
          path="/explorar/bebidas/ingredientes"
          component={ ExploreDrinkIngredient }
        />

        {/* <Route path="/bebidas:id" component={} />

        {/*
        Tela de receita em processo de comida: /comidas/{id-da-receita}/in-progress;
        Tela de receita em processo de bebida: /bebidas/{id-da-receita}/in-progress; */}
        <Route exact path="/receitas-feitas" component={ RecipesMade } />
        <Route exact path="/receitas-favoritas" component={ RecipesFavorites } />
        <Route path="*" component={ NotFound } />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
