import React from 'react';
import PropTypes from 'prop-types';
import RecipeList from './RecipeList';
import RecipeDetail from './RecipeDetail';

// fetch(process.env.API_URL + '/v1/recipes')
// fetch(`${API_URL}/v1/recipes`) // webpack already did a hard job
//   .then(res => res.json())
//   .then(json => console.log(json));

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentRecipe: null,
    };
    // this.onRecipeClick = this.onRecipeClick.bind(this);
    // use arrow function to get rid of this bind but need to add babel-preset-stage-0
    // yarn add babel-preset-stage-0
  }

  onRecipeClick = (id) => {
    fetch(`${API_URL}/v1/recipes/${id}`) // webpack already did a hard job
      .then(res => res.json())
      .then((currentRecipe) => {
        // console.log(currentRecipe);
        this.setState({
          currentRecipe,
        });
      });
  };

  render() {
    const { currentRecipe } = this.state;
    const { recipes, favorites } = this.props.state;
    return (
      <div style={{ flex: 3 }}>
        <main className="px4 flex">
          <div>
            <h2 className="h2">My List</h2>
            <RecipeList
              recipes={recipes}
              favorites={favorites}
              onClick={this.onRecipeClick}
              onFavorited={this.props.toggleFavorite}
            />
          </div>
          <RecipeDetail className="ml4" style={{ flex: 5 }} recipe={currentRecipe} />
        </main>
      </div>
    );
  }
}
Home.propTypes = {
  state: PropTypes.object,
  recipes: PropTypes.object,
  favorites: PropTypes.object,
  toggleFavorite: PropTypes.func,
};
export default Home;
