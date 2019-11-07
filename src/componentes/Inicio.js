import React from 'react';
import { Link } from "react-router-dom";
import logo from '../images/logo.svg';
import logoimcyc from '../images/logo-imcyc.svg';

import './Inicio.css';

const Inicio = () => {
  return (
    <div className="App">
      <header className="App-header">
        <div className="wrapper fadeInDown">
          <div id="formContent">
            <div className="fadeIn first">
              <img src={logo} id="icon" className="logo" alt="APP DE LOSAS PARA VIVIENDA DEACERO - Instituto Mexicano del Cemento y del Concreto A.C." title="APP DE LOSAS PARA VIVIENDA DEACERO - Instituto Mexicano del Cemento y del Concreto A.C." />
              <p>APP DE LOSAS PARA VIVIENDA</p>
            </div>
            <form>
              <input type="text" id="login" className="fadeIn second" name="login" placeholder="USUARIO" required/>
              <input type="text" id="password" className="fadeIn third" name="login" placeholder="CONTRASEÑA" required/>
              <Link to="/dashboard" className="btn fadeIn fourth" >INGRESAR A SU CUENTA</Link>
            </form>
            <div id="formFooter">
              <Link className="underlineHover" to="/">
                <img src={logoimcyc} id="icon" className="logoimcyc" alt="APP DE LOSAS PARA VIVIENDA DEACERO - Instituto Mexicano del Cemento y del Concreto A.C." title="APP DE LOSAS PARA VIVIENDA DEACERO - Instituto Mexicano del Cemento y del Concreto A.C." style={{width: '300px'}} />
              </Link>
              <p className="small">Instituto Mexicano del Cemento y del Concreto A.C.</p>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}
 
export default Inicio;