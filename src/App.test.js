import React from "react";
import { shallow } from "enzyme";
import App from "./App";
import { Route } from 'react-router-dom';
import ErrorComponent from './components/ErrorComponent.js'
import SuccessComponent from './components/SuccessComponent.js'
import HeaderComponent from './components/HeaderComponent.js'
import FooterComponent from './components/FooterComponent.js'
import HomeComponent from './components/HomeComponent.js'
import DepartmentComponent from './components/DepartmentComponent.js'
import MedicineComponent from './components/MedicineComponent.js'
import DermatologyComponent from './components/DermatologyComponent.js'
import CardiologyComponent from './components/CardiologyComponent.js'
import DentalComponent from './components/DentalComponent.js'
import SignupComponent from './components/SignupComponent.js'
import LoginComponent from './components/LoginComponent.js'
import AdminComponent from './components/AdminComponent.js'
import DoctorApprovalComponent from './components/DoctorApprovalComponent.js'
import PatientApprovalComponent from './components/PatientApprovalComponent.js'
import AppointmentApprovalComponent from './components/AppointmentApprovalComponent.js'
import SignupDoctorComponent from './components/SignupDoctorComponent.js'

it("Renders without crashing", () => {
  shallow(<HeaderComponent />);
  shallow(<App />);
  shallow(<FooterComponent />);
});

let pathMap = {};
describe('Routes using array of routers', () => {
  beforeAll(() => {
    const component = shallow(<App/>);
    pathMap = component.find(Route).reduce((pathMap, route) => {
        const routeProps = route.props();
        pathMap[routeProps.path] = routeProps.component;
        return pathMap;
      }, {});
      console.log(pathMap)
  })
  it('should show Home component for / router (getting array of routes)', () => {

    expect(pathMap['/']).toBe(HomeComponent);
  })
  it('should show Department component for /department router', () => {
    expect(pathMap['/department']).toBe(DepartmentComponent);
  })
  it('should show Cardiology component for /department/cardiology router', () => {
    expect(pathMap['/department/cardiology']).toBe(CardiologyComponent);
  })
  it('should show Dental component for /department/dental router', () => {
    expect(pathMap['/department/dental']).toBe(DentalComponent);
  })
  it('should show Dermatology component for /department/dermatology router', () => {
    expect(pathMap['/department/dermatology']).toBe(DermatologyComponent);
  })
  it('should show Medicine component for /department/medicine router', () => {
    expect(pathMap['/department/medicine']).toBe(MedicineComponent);
  })
  it('should show Login component for /login router', () => {
    expect(pathMap['/login']).toBe(LoginComponent);
  })
  it('should show Signup component for /signup/patient router', () => {
    expect(pathMap['/signup/patient']).toBe(SignupComponent);
  })
  it('should show Signup Doctor component for /signup/doctor router', () => {
    expect(pathMap['/signup/doctor']).toBe(SignupDoctorComponent);
  })
  it('should show Admin component for /admin router', () => {
    expect(pathMap['/admin']).toBe(AdminComponent);
  })
  it('should show Patient Approval component for /admin/patients router', () => {
    expect(pathMap['/admin/patients']).toBe(PatientApprovalComponent);
  })
  it('should show Doctor Approval component for /admin/doctors router', () => {
    expect(pathMap['/admin/doctors']).toBe(DoctorApprovalComponent);
  })
  it('should show Appointment Approval component for /admin/appointments router', () => {
    expect(pathMap['/admin/appointments']).toBe(AppointmentApprovalComponent);
  })
  it('should show Success component for /success router', () => {
    expect(pathMap['/success']).toBe(SuccessComponent);
  })
  it('should show Error component for route not defined', ()=>{
      expect(pathMap['undefined']).toBe(ErrorComponent);
  })
})