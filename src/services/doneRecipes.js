const DONE_RECIPES = 'DoneRecipes';

if (!JSON.parse(localStorage.getItem(DONE_RECIPES))) {
  localStorage.setItem(DONE_RECIPES, JSON.stringify([]));
}

export const getDoneRecipes = () => JSON.parse(localStorage
  .getItem(DONE_RECIPES));

export const saveDoneRecipes = (recipe) => localStorage
  .setItem(DONE_RECIPES, JSON.stringify(recipe));

export const addDoneRecipes = (recipe) => {
  const recipesList = getDoneRecipes();
  if (recipe) {
    if (recipe.type === 'food') {
      const existFood = !recipesList.some(({ id }) => recipe.id === id);

      return existFood && saveDoneRecipes([...recipesList, recipe]);
    }

    const existDrink = !recipesList.some(({ id }) => recipe.id === id);

    return existDrink && saveDoneRecipes([...recipesList, recipe]);
  }
};
