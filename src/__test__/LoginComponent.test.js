import React from "react";
import { shallow} from "enzyme";
import LoginComponent from '../components/LoginComponent.js'

it("Renders without crashing", () => {
    shallow(<LoginComponent />);
});

const user = {
    email: "test@gmail.com",
    password: "password",
  };
  
describe("", () => {
    it("accepts user account props", () => {
      const wrapper = shallow(<LoginComponent />);
      expect(wrapper.state("user")).toEqual(user);
    });
    it("contains users account email", () => {
      const wrapper = shallow(<LoginComponent />);
      const input = wrapper.find("input").first();
      input.simulate('change', { target: { value: user.email }});
    });
    it("contains users password", () => {
        const wrapper = shallow(<LoginComponent />);
        const input = wrapper.find("input").last();
        input.simulate('change', { target: { value: user.password }});
      });
});