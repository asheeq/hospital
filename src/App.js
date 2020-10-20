import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
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
import './App.css';
import './bootstrap.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <>
            <HeaderComponent/>
              <Switch>
                <Route exact path="/" component={HomeComponent}/>
                <Route exact path="/department" component={DepartmentComponent}/>
                <Route exact path="/department/medicine" component={MedicineComponent}/>
                <Route exact path="/department/dermatology" component={DermatologyComponent}/>
                <Route exact path="/department/cardiology" component={CardiologyComponent}/>
                <Route exact path="/department/dental" component={DentalComponent}/>
                <Route exact path="/login" component={LoginComponent}/>
                <Route exact path="/signup" component={SignupComponent}/>
                <Route exact path="/admin" component={AdminComponent}/>
                <Route exact path="/admin/doctors" component={DoctorApprovalComponent}/>
                <Route exact path="/admin/patients" component={PatientApprovalComponent}/>
                <Route exact path="/admin/appointments" component={AppointmentApprovalComponent}/>
                <Route exact path="/signup/doctor" component={SignupDoctorComponent}/>
                <Route exact path="/success" component={SuccessComponent}/>
                <Route component={ErrorComponent}/>
              </Switch>
            <FooterComponent/>
          </>
        </Router>
      </div>
    );
  }
}

export default App;