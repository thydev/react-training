import React from 'react';
import renderer from 'react-test-renderer';
import RecipeListItem from '../components/RecipeListItem';

const testRecipe = {
  id: 1,
  name: 'Test recipe',
  category: 'Test category',
};

describe('<RecipeListItem />', () => {
  test('Should not break if no recipe pass', () => {
    const component = renderer.create(<RecipeListItem />);
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });

  test('Should render recipe correctly', () => {
    const component = renderer.create(<RecipeListItem recipe={testRecipe} />);
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });

  test('Should render favorited state', () => {
    const favorited = true;
    const component = renderer.create(<RecipeListItem recipe={testRecipe} favorited={favorited} />);
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });
});
