import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import Login from './components/authentication/Login';


import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route path-='/login' component={Login} />
      </BrowserRouter>
    </div>
  );
}

export default App;
