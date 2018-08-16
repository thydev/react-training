import React from 'react';
import PropTypes from 'prop-types';
import RecipeListItem from './RecipeListItem';

const RecipeList = ({
  recipes, style, favorites, ...props
}) => (
  <ul style={style} className="list-reset">
    {recipes.map(recipe => (
      <RecipeListItem recipe={recipe} favorited={favorites.includes(recipe.id)} {...props} />
    ))}
  </ul>
);
RecipeList.propTypes = {
  style: PropTypes.object,
  recipes: PropTypes.object,
  favorites: PropTypes.object,
  onClick: PropTypes.func,
  onFavorited: PropTypes.func,
};
export default RecipeList;
