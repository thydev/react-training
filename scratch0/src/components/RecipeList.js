import React from 'react';
import PropTypes from 'prop-types';

const RecipeList = ({ recipes, style, onClick }) => (
  <div style={style}>
    <h2 className="h2">My List</h2>
    <ul className="list-reset">
      {recipes.map(recipe => (
        <li
          key={recipe.id}
          onClick={() => onClick(recipe.id)}
          className="py2 border-bottom border-bottom-dashed pointer"
        >
          <span>{recipe.name}</span>
          <span>{recipe.category}</span>
        </li>
      ))}
    </ul>
  </div>
);
RecipeList.propTypes = {
  style: PropTypes.object,
  recipes: PropTypes.object,
  onClick: PropTypes.object,
};
export default RecipeList;
