import React from "react";
import { shallow} from "enzyme";
import SignupComponent from '../components/SignupComponent.js'

it("Renders without crashing", () => {
    shallow(<SignupComponent />);
});

const patientName = "test";
const email = "test@gmail.com";
const password = "password";
const patientAge = 25;
  
describe("", () => {
    it("accepts user account props", () => {
      const wrapper = shallow(<SignupComponent />);
      expect(wrapper.state("patientName")).toEqual(patientName);
      expect(wrapper.state("email")).toEqual(email);
      expect(wrapper.state("password")).toEqual(password);
      expect(wrapper.state("patientAge")).toEqual(patientAge);
    });
    it("contains users account patientName", () => {
      const wrapper = shallow(<SignupComponent />);
      const input = wrapper.find("input").first();
      input.simulate('change', { target: patientName});
    });
    it("contains users account patientName", () => {
        const wrapper = shallow(<SignupComponent />);
        const input = wrapper.find("input").at(2);
        input.simulate('change', { target: email});
    });
    it("contains users account patientName", () => {
        const wrapper = shallow(<SignupComponent />);
        const input = wrapper.find("input").at(3);
        input.simulate('change', { target: password});
    });
    it("contains users age", () => {
        const wrapper = shallow(<SignupComponent />);
        const input = wrapper.find("input").last();
        input.simulate('change', { target: patientAge});
    });
});