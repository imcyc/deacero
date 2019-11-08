import React from 'react';
import { Link } from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import './Header.css';
import logo from '../../images/logo.svg';
import logoimcyc from '../../images/logo-imcyc.svg';


const Header = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="/">
        <img src={logoimcyc} id="icon" className="logo" alt="APP DE LOSAS PARA VIVIENDA DEACERO - Instituto Mexicano del Cemento y del Concreto A.C." title="APP DE LOSAS PARA VIVIENDA DEACERO - Instituto Mexicano del Cemento y del Concreto A.C." />
        <img src={logo} id="icon" className="logo ml-4" alt="APP DE LOSAS PARA VIVIENDA DEACERO - Instituto Mexicano del Cemento y del Concreto A.C." title="APP DE LOSAS PARA VIVIENDA DEACERO - Instituto Mexicano del Cemento y del Concreto A.C." />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          {/*
          <Nav.Link href="/">INICIO</Nav.Link>
          <Nav.Link href="/recursos">RECURSOS</Nav.Link>
          <NavDropdown title="CONTACTO" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
          </NavDropdown>
          */}
        </Nav>
          
        <Form inline>
          <FormControl type="text" placeholder="Buscar" className="mr-sm-2" />
          <Button variant="outline-success" style={{borderRadius: '50%'}}><i className="material-icons">youtube_searched_for</i></Button>
          <Link to="/" className="btn ml-2">SALIR</Link>
        </Form>
      </Navbar.Collapse>
    </Navbar>
  );
}
 
export default Header;