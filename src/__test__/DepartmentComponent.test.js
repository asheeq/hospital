import React from "react";
import { shallow, mount } from "enzyme";
import DepartmentComponent from '../components/DepartmentComponent.js'

it("Renders without crashing", () => {
    shallow(<DepartmentComponent />);
});

const departments = [
    {id: 1, departmentName: "cardiology"},
    {id: 2, departmentName: "dermatology"},    
    {id: 3, departmentName: "dental"},
    {id: 4, departmentName: "medicine"}
];

it("renders departments correctly", () => {
    const wrapper = shallow(<DepartmentComponent />);
    expect(wrapper.state("departments")).toEqual(departments);
  });