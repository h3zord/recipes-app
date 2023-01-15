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
    setFoodFiltered({ ...foodFiltered, toggle: false, id: '' });
    setDrinkFiltered({ ...drinkFiltered, toggle: false, id: '' });
  };

  return (
    <div className="remove-filters">
      <button
        type="button"
        data-testid="All-category-filter"
        className="btn btn-secondary"
        onClick={ removeAllFilters }
      >
        Remove Filters
      </button>
    </div>
  );
}

export default RemoveFilterButton;
