import React from 'react';
import Header from './Header.js';
import RecipeList from './RecipeList.js';
import RecipeDetail from './RecipeDetail.js';

// fetch(process.env.API_URL + '/v1/recipes')
// fetch(`${API_URL}/v1/recipes`) // webpack already did a hard job
//   .then(res => res.json())
//   .then(json => console.log(json));

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      recipes: [],
      currentRecipe: null
    };
    // this.onRecipeClick = this.onRecipeClick.bind(this);
    // use arrow function to get rid of this bind but need to add babel-preset-stage-0
    // yarn add babel-preset-stage-0
  }

  componentDidMount() {
    fetch(`${API_URL}/v1/recipes`) // webpack already did a hard job
      .then(res => res.json())
      .then(recipes => {
        this.setState({
          recipes
        });
      });
  }

  onRecipeClick = id => {
    console.log(id);
    fetch(`${API_URL}/v1/recipes/${id}`) // webpack already did a hard job
      .then(res => res.json())
      .then(currentRecipe => {
        console.log(currentRecipe);
        this.setState({
          currentRecipe
        });
      });
  };

  render() {
    const { recipes, currentRecipe } = this.state;
    return (
      <div>
        <Header />
        <main className="px4 flex">
          <RecipeList
            style={{ flex: 3 }}
            recipes={recipes}
            onClick={this.onRecipeClick}
          />
          <RecipeDetail
            className="ml4"
            style={{ flex: 5 }}
            recipe={currentRecipe}
          />
        </main>
      </div>
    );
  }
}

export default App;
