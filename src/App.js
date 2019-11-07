import React from 'react';
import { HashRouter, BrowserRouter as Router, Route } from "react-router-dom";
import Inicio from './componentes/Inicio';
import './App.css';

function App() {
  return (
    <HashRouter basename='/'>
    <Router basename={process.env.PUBLIC_URL}>
      <div className="App">
        <header className="App-header">
          <Route exact path="/" component={Inicio} />
        </header>
      </div>
    </Router>
    </HashRouter>
  );
}

export default App;
