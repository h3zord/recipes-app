import React, { useContext } from 'react';
import MyRecipesContext from '../context/recipesContext/MyRecipesContext';

function RemoveFilterButton() {
  const {
    foodFiltered,
    setFoodFiltered,
    drinkFiltered,
    setDrinkFiltered,
  } = useContext(MyRecipesContext);

  const removeAllFilters = () => {
    setFoodFiltered({ ...foodFiltered, toggle: false });
    setDrinkFiltered({ ...drinkFiltered, toggle: false });
  };

  return (
    <button
      type="button"
      data-testid="All-category-filter"
      onClick={ removeAllFilters }
    >
      All
    </button>
  );
}

export default RemoveFilterButton;