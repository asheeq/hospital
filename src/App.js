import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import ErrorComponent from './components/ErrorComponent.js'
import HeaderComponent from './components/HeaderComponent.js'
import FooterComponent from './components/FooterComponent.js'
import HomeComponent from './components/HomeComponent.js'
import DepartmentComponent from './components/DepartmentComponent.js'
import MedicineComponent from './components/MedicineComponent.js'
import DermatologyComponent from './components/DermatologyComponent.js'
import CardiologyComponent from './components/CardiologyComponent.js'
import DentalComponent from './components/DentalComponent.js'
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
                <Route path="/" exact component={HomeComponent}/>
                <Route path="/department" component={DepartmentComponent}/>
                <Route path="/department-medicine" component={MedicineComponent}/>
                <Route path="/department-dermatology" component={DermatologyComponent}/>
                <Route path="/department-cardiology" component={CardiologyComponent}/>
                <Route path="/department-dental" component={DentalComponent}/>
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