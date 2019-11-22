import React from 'react';
import { HashRouter, Route, Switch } from "react-router-dom";
import Inicio from './componentes/Inicio';
import Dashboard from './componentes/Dashboard';
import './App.css';

function App() {
  return (
    <HashRouter basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route exact path="/" component={Inicio} />
        <Route exact path="/dashboard" component={Dashboard} />
      </Switch>
    </HashRouter>
  );
}

export default App;
