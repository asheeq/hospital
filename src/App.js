import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import ErrorComponent from './components/ErrorComponent.js'
import HeaderComponent from './components/HeaderComponent.js'
import FooterComponent from './components/FooterComponent.js'
import HomeComponent from './components/HomeComponent.js'
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