import React from 'react';
import PropTypes from 'prop-types';
import RecipeListItem from './RecipeListItem';

const RecipeList = ({
  recipes, style, favorites, ...props
}) => (
  <ul style={style} className="list-reset">
    {recipes.map(recipe => (
      <RecipeListItem
        key={recipe.id}
        recipe={recipe}
        favorited={favorites.includes(recipe.id)}
        {...props}
      />
    ))}
  </ul>
);
RecipeList.propTypes = {
  style: PropTypes.object,
  recipes: PropTypes.array,
  favorites: PropTypes.array,
  onClick: PropTypes.func,
  onFavorited: PropTypes.func,
};

RecipeList.defaultProps = {
  recipes: [],
  favorites: [],
};
export default RecipeList;
