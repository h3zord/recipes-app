import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import MyRecipesContext from '../context/recipesContext/MyRecipesContext';

// eslint-disable-next-line
function SearchBar(props) {
  const { url } = props;
  const [inputValue, setInputValue] = useState('');
  const [filterRadioType, setFilterRadioType] = useState('');
  const [isDisabled, setIsDisabled] = useState(true);
  const {
    setFoodFiltered,
    setDrinkFiltered,
    setIsSearch,
  } = useContext(MyRecipesContext);

  const getSearchInput = document.getElementById('search-input');
  const msg = 'Sorry, we haven\'t found any recipes for these filters.';

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    if (inputValue && filterRadioType) return setIsDisabled(false);
    setIsDisabled(true);
  });

  const updateStateValue = ({ target }) => {
    const { value } = target;
    setFilterRadioType(value);
  };

  const searchFoodRecipe = async () => {
    setIsSearch(true);
    if (filterRadioType === 'ingredient') {
      const { meals } = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${inputValue}`)
        .then((response) => response.json());
      getSearchInput.value = '';
      return meals ? setFoodFiltered({ foodList: [...meals], toggle: true, id: '' })
        : global.alert(msg);
    }
    if (filterRadioType === 'name') {
      const { meals } = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${inputValue}`)
        .then((response) => response.json());
      getSearchInput.value = '';
      return meals ? setFoodFiltered({ foodList: [...meals], toggle: true, id: '' })
        : global.alert(msg);
    }
    if (filterRadioType === 'firstLetter' && inputValue.length === 1) {
      const { meals } = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${inputValue}`)
        .then((response) => response.json());
      getSearchInput.value = '';
      return meals && setFoodFiltered({ foodList: [...meals], toggle: true, id: '' });
    }
    if (filterRadioType === 'firstLetter' && inputValue.length > 1) {
      getSearchInput.value = '';
      return global.alert('Your search must have only 1 (one) character');
    }
  };

  const searchDrinkRecipe = async () => {
    setIsSearch(true);
    if (filterRadioType === 'ingredient') {
      const TWELVE = 12;
      const { drinks } = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${inputValue}`)
        .then((response) => response.json());
      getSearchInput.value = '';
      return drinks ? setDrinkFiltered({
        drinkList: [...drinks.filter((_drink, index) => index < TWELVE)],
        toggle: true,
        id: '',
      }) : global.alert(msg);
    }
    if (filterRadioType === 'name') {
      const TWELVE = 12;
      const { drinks } = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${inputValue}`)
        .then((response) => response.json());
      getSearchInput.value = '';
      return drinks ? setDrinkFiltered({
        drinkList: [...drinks.filter((_drink, index) => index < TWELVE)],
        toggle: true,
        id: '',
      }) : global.alert(msg);
    }
    if (filterRadioType === 'firstLetter' && inputValue.length === 1) {
      const TWELVE = 12;
      const { drinks } = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${inputValue}`)
        .then((response) => response.json());
      getSearchInput.value = '';
      return drinks && setDrinkFiltered({
        drinkList: [...drinks.filter((_drink, index) => index < TWELVE)],
        toggle: true,
        id: '',
      });
    }
    if (filterRadioType === 'firstLetter' && inputValue.length > 1) {
      getSearchInput.value = '';
      return global.alert('Your search must have only 1 (one) character');
    }
  };

  return (
    <div className="search-container">
      <div className="search-content">
        <label htmlFor="search-input">
          <input
            type="text"
            name="search-input"
            id="search-input"
            data-testid="search-input"
            placeholder="Buscar..."
            className="search-input"
            onChange={ ({ target }) => setInputValue(target.value) }
          />
        </label>
      </div>

      <div className="search-radios">
        <label htmlFor="ingredient-radio">
          <input
            type="radio"
            data-testid="ingredient-search-radio"
            value="ingredient"
            id="ingredient-radio"
            name="radio-search"
            onChange={ updateStateValue }
          />
          Ingredient
        </label>

        <label htmlFor="name-radio">
          <input
            type="radio"
            data-testid="name-search-radio"
            value="name"
            id="name-radio"
            name="radio-search"
            onChange={ updateStateValue }
          />
          Name
        </label>

        <label htmlFor="first-letter-radio">
          <input
            type="radio"
            data-testid="first-letter-search-radio"
            value="firstLetter"
            id="first-letter-radio"
            name="radio-search"
            onChange={ updateStateValue }
          />
          First Letter
        </label>

        <button
          type="button"
          data-testid="exec-search-btn"
          onClick={ url.includes('foods') ? searchFoodRecipe : searchDrinkRecipe }
          disabled={ isDisabled }
        >
          Search
        </button>
      </div>

    </div>
  );
}

SearchBar.propTypes = {
  url: PropTypes.string.isRequired,
};

export default SearchBar;
