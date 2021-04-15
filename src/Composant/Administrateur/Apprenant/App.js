import React, { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import AddTutorial from "./components/add-tutorial";
import TutorialsList from "./components/tutorials-list";

class App extends Component {
  render() {
    return (
      <div>
        
          <a href="/tutorials" className="navbar-brand">
            ACCUIELLE 
          </a>
          <div className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to={"/tutorials"} className="nav-link">
                Tutorials
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/add"} className="nav-link">
                Add
              </Link>
            </li>
          </div>
        

        <div className="container mt-3">
          <h2>Modification sur Apprenants</h2>
          <Switch>
            <Route exact path={["/", "/tutorials"]} component={TutorialsList} />
            <Route exact path="/add" component={AddTutorial} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;