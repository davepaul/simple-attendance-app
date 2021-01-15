import React from "react";
import routes from './router/routes';
import RouterView from './router/index';
import './App.css';

import {
  BrowserRouter as Router
} from "react-router-dom";

const App = () => (
  <Router>
    <RouterView routes={routes}/>
  </Router>
)

export default App;