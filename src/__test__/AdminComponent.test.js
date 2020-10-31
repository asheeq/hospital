import React from "react";
import { shallow } from "enzyme";
import AdminComponent from '../components/AdminComponent.js'
import { Link } from 'react-router-dom'
import renderer from 'react-test-renderer';
import { StaticRouter } from 'react-router'

it("Renders without crashing", () => {
    shallow(<AdminComponent />);
});

test('Link matches snapshot', () => {
  const component = renderer.create(
    <StaticRouter>
      <Link to="/admin/patients" />
      <Link to="/admin/doctors" />
      <Link to="/admin/appointments" />
    </StaticRouter>
  );

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});