import React from "react";
import { shallow } from "enzyme";
import HomeComponent from '../components/HomeComponent.js'
import { Link } from 'react-router-dom'
import renderer from 'react-test-renderer';
import { StaticRouter } from 'react-router'

it("Renders without crashing", () => {
    shallow(<HomeComponent />);
});

test('Link matches snapshot', () => {
  const component = renderer.create(
    <StaticRouter>
      <Link to="/department" />
    </StaticRouter>
  );

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});