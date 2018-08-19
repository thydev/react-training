import React from 'react';
import renderer from 'react-test-renderer';
import RecipeList from '../components/RecipeList';

const testRecipes = [
  {
    id: 1,
    name: 'Test recipe1',
    category: 'Test category1',
  },
  {
    id: 2,
    name: 'Test recipe2',
    category: 'Test category2',
  },
];

describe('<RecipeList />', () => {
  test('Should not break when no recipes passed', () => {
    const component = renderer.create(<RecipeList />);
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });

  test('Should render recipes correctly', () => {
    const component = renderer.create(<RecipeList recipes={testRecipes} />);
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });

  test('Should render favorite state correctly', () => {
    const component = renderer.create(<RecipeList recipe={testRecipes} favorites={[1]} />);
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });
});
