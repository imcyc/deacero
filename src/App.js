import React from 'react';
import { Route, Switch } from "react-router-dom";
import Inicio from './componentes/Inicio';
import Dashboard from './componentes/Dashboard';
import './App.css';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Inicio} />
      <Route exact path="/dashboard" component={Dashboard} />
    </Switch>
  );
}

export default App;
