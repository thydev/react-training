import React, { Component } from 'react';

const RecipeList = props => (
  <div style={props.style}>
    <h1>My LIst</h1>
    <ul>
      {props.recipes.map(recipe => (
        <li key={recipe.id} onClick={() => props.onClick(recipe.id)}>
          <span>{recipe.name}</span>
          <span>{recipe.category}</span>
        </li>
      ))}
    </ul>
  </div>
);

export default RecipeList;
