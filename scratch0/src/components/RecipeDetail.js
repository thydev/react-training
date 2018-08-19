import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import classNames from 'classnames';

const RecipeDetail = ({ style, recipe, className }) => {
  if (!recipe) {
    return (
      <p style={style} className={classNames('h3 p2 bg-white italic center', className)}>
        Please select the reciep to see the detail.
      </p>
    );
  }

  return (
    <div style={style} className={classNames('p2 bg-white', className)}>
      <h2 className="h2">{recipe.name}</h2>
      <div className="flex flex-column">
        <img alt={recipe.name} className="fit" src={recipe.image} />
        <div>
          <span>{recipe.category}</span>
          <span>{recipe.calories} cal</span>
        </div>
        {recipe.ingredients && (
          <div>
            <h3>Ingredients</h3>
            <ul>
              {recipe.ingredients.map(ing => (
                <li key={ing}>{ing}</li>
              ))}
            </ul>
          </div>
        )}
        {recipe.steps && (
          <div>
            <h3>Steps</h3>
            <ol>
              {recipe.steps.map(step => (
                <li key={step}>{step}</li>
              ))}
            </ol>
          </div>
        )}
        <Link to={`/recipe/${recipe.id}`}>See more</Link>
      </div>
    </div>
    /* <div style={style} className={classNames('p2 bg-white', className)}>
    <h2 className="h2">{recipe.name}</h2>
    <div className="flex flex-column">
      <img alt={recipe.name} className="fit" src={recipe.image} />
      <div>
        <span>{recipe.category}</span>
        <span>{recipe.calories} cal</span>
      </div>
      {recipe.ingredients && (
        <div>
          <h3>Ingredients</h3>
          <ul>
            {recipe.ingredients.map(ingredient => (
              <li key={ingredient}>{ingredient}</li>
            ))}
          </ul>
        </div>
      )}
      {recipe.steps && (
        <div>
          <h3>Steps</h3>
          <ol>{recipe.steps.map(step => <li key={step}>{step}</li>)}</ol>
        </div>
      )}
      <Link
        className="right-align"
        to={`/recipe/${recipe.id}`}
        href={`/recipe/${recipe.id}`}
      >
        Detail
      </Link>
    </div>
  </div> */
  );
};

RecipeDetail.propTypes = {
  recipe: PropTypes.object,
  className: PropTypes.string,
  style: PropTypes.object,
};

export default RecipeDetail;
