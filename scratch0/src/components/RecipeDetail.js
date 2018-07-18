import React, { Component } from 'react';

const RecipeDetail = ({ style, recipe }) => {
  if (!recipe) {
    return (
      <div style={style}>
        <h2>Please select the reciep to see the detail.</h2>
      </div>
    );
  }

  return (
    <div style={style}>
      <h2 className="h2">{recipe.name}</h2>
      <div className="flex flex-column">
        <img alt={recipe.name} className="fit" src={recipe.image} />
        <div>
          <span>{recipe.category}</span>
          <span>{recipe.calories} cal</span>
        </div>

        <div>
          <h3>Ingredients</h3>
          <ul>{recipe.ingredients.map(ing => <li key={ing}>{ing}</li>)}</ul>
        </div>

        <div>
          <h3>Steps</h3>
          <ol>{recipe.steps.map(step => <li key={step}>{step}</li>)}</ol>
        </div>
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

export default RecipeDetail;
