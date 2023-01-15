import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';
import blackHeartIcon from '../images/blackHeartIcon.svg';
import { toggleFavoriteAction } from '../redux/actions/myActions';
import {
  addFavoriteStorage,
  getFavoriteStorage,
  saveFavoriteStorage,
} from '../services/favoriteStorage';

class FavoriteButton extends React.Component {
  componentDidMount() {
    const { id, toggleFavorite } = this.props;
    const getFavorites = getFavoriteStorage();
    if (getFavorites) {
      return getFavorites
        .some((favoriteRecipe) => favoriteRecipe.id === id)
        ? toggleFavorite(true) : toggleFavorite(false);
    }
  }

  addFavoriteRecipe = () => {
    const { dataRecipe, url, toggleFavorite } = this.props;

    const recipeToAdd = {
      id: url.includes('foods') ? dataRecipe.idMeal : dataRecipe.idDrink,
      type: url.includes('foods') ? 'food' : 'drink',
      nationality: dataRecipe.strArea ? dataRecipe.strArea : '',
      category: dataRecipe.strCategory ? dataRecipe.strCategory : '',
      alcoholicOrNot: dataRecipe.strAlcoholic ? dataRecipe.strAlcoholic : '',
      name: url.includes('foods') ? dataRecipe.strMeal : dataRecipe.strDrink,
      image: url.includes('foods') ? dataRecipe.strMealThumb : dataRecipe.strDrinkThumb,
    };
    addFavoriteStorage(recipeToAdd);
    toggleFavorite(true);
  };

  removeFavoriteRecipe = () => {
    const { id, toggleFavorite } = this.props;

    const getFavorites = getFavoriteStorage();
    const updatedRecipe = getFavorites
      .filter((favoriteRecipe) => favoriteRecipe.id !== id);
    saveFavoriteStorage(updatedRecipe);
    toggleFavorite(false);
  };

  render() {
    const { isFavorite } = this.props;
    return (

      <button
        type="button"
        data-testid="favorite-btn"
        onClick={ isFavorite ? this.removeFavoriteRecipe : this.addFavoriteRecipe }
        src={ isFavorite ? blackHeartIcon : whiteHeartIcon }
      >
        <img
          src={ isFavorite ? blackHeartIcon : whiteHeartIcon }
          alt="Favorite Icon"
        />
      </button>
    );
  }
}

FavoriteButton.propTypes = {
  isFavorite: PropTypes.bool.isRequired,
  toggleFavorite: PropTypes.func.isRequired,
  url: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  dataRecipe: PropTypes.shape(PropTypes.string.isRequired)
    .isRequired,
};

const mapStateToProps = (store) => ({
  isFavorite: store.myReducer.isFavorite,
});

const mapDispatchToProps = (dispatch) => ({
  toggleFavorite: (payload) => dispatch(toggleFavoriteAction(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(FavoriteButton);
