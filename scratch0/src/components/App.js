import React from 'react';
import Header from './Header.js';
import RecipeList from './RecipeList.js';
import RecipeDetail from './RecipeDetail.js';

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
