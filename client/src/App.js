import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Cities from "./components/Cities"
import Parks from "./components/Parks"
import SingleCity from "./components/SingleCity"
import SinglePark from "./components/SinglePark"
import Nav from "./components/Nav"
import Home from "./components/Home"

class App extends Component {
  render() {

    return (
      <Router>
        <div>

          <div>
            <Nav />
          </div>
          
          <Route exact path="/" component={Home} />
          <Route exact path="/parks" component={Parks} />
          <Route exact path="/cities" component={Cities} />
          <Route exact path="/cities/:id" component={SingleCity} />
          <Route exact path="/parks/:id" component={SinglePark} />

        </div>
      </Router>
    )
  }
}

export default App;
