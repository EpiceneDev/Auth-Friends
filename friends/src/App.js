import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { createStore } from 'redux';
import reducer from './reducers'
import Login from './components/authentication/Login';
import Dashboard from './components/Dashboard';
import PrivateRoute from './components/PrivateRoute';
import AddFriend from './components/Friend';

import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
      {/* <button>
      <Link to="/">Log In</Link>
      </button> */}
      <br />
      <br />
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
          <PrivateRoute path="/protected" component={Dashboard} />
          <PrivateRoute path="/add" component={AddFriend} />
          {/* <PrivateRoute path="/add" component={props=> <AddFriend {...props} />} /> */}

        </Switch>
      </div>
    </Router>
  );
}

export default App;