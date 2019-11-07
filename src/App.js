import React from 'react';
import { HashRouter, BrowserRouter as Router, Route } from "react-router-dom";
import Inicio from './componentes/Inicio';
import Dashboard from './componentes/Dashboard';
import './App.css';

function App() {
  return (
    <HashRouter basename='/'>
    <Router basename={process.env.PUBLIC_URL}>
      <Route exact path="/" component={Inicio} />
      <Route exact path="/dashboard" component={Dashboard} />
    </Router>
    </HashRouter>
  );
}

export default App;
