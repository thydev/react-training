import React from 'react';
import Header from './Header.js';
import RecipeList from './RecipeList.js';
import RecipeDetail from './RecipeDetail.js';

// fetch(process.env.API_URL + '/v1/recipes')
fetch(`${API_URL}/v1/recipes`) // webpack do already did a hard job
  .then(res => res.json())
  .then(json => console.log(json));

const App = () => {
  return (
    <div>
      <Header />
      <main style={{ display: 'flex' }}>
        <RecipeList style={{ flex: 3 }} />
        <RecipeDetail style={{ flex: 4 }} />
      </main>
    </div>
  );
};

export default App;
