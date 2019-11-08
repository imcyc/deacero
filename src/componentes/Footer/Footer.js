import React from 'react';
import logoimcycblanco from '../../images/logo-imcyc-blanco.svg';
import './Footer.css';

const Footer = () => {
  return (
    <section id="footer">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-2 text-center text-white">
            <img src={logoimcycblanco} id="icon" className="logo" alt="APP DE LOSAS PARA VIVIENDA DEACERO - Instituto Mexicano del Cemento y del Concreto A.C." title="APP DE LOSAS PARA VIVIENDA DEACERO - Instituto Mexicano del Cemento y del Concreto A.C." />
            <p>Instituto Mexicano del Cemento y del Concreto A.C.</p>
            <p className="h6">© 2018-2019 Todos Los Derechos Reservados.</p>
          </div>
          <hr/>
        </div>	
      </div>
    </section>
  );
}
 
export default Footer;