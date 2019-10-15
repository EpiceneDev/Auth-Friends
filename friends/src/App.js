import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { createStore } from 'redux';
import reducer from './reducers'
import Login from './components/authentication/Login';
import Dashboard from './components/Dashboard';

import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <ul>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/protected">Protected Page</Link>
          </li>
        </ul>
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/protected" component={Dashboard} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
