import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import './Contenido.css';

class Contenido extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return (
      <div className="wrap-contenido">
        <section>
          <div class="column opciones">
            <div className="titulo">
              <h1>APP LOSAS PARA VIVIENDA</h1>
              <h3>LOSAS EN UNA DIRECCIÓN, SIMPLEMENTE APOYADAS</h3>
              <p><i class="material-icons">location_searching</i> Por Favor ingrese los siguientes datos:</p>
              <Form>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Área:</Form.Label>
                  <Form.Control type="number" placeholder="Ingrese el tamaño del área a calcular en Metros Cuadrados" required="required" />
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlSelect1">
                  <Form.Label>Destino:</Form.Label>
                  <Form.Control as="select" required="required">
                    <option>AZOTEA</option>
                    <option>ENTREPISO</option>
                  </Form.Control>
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlSelect2">
                  <Form.Label>Longitud del claro:</Form.Label>
                  <Form.Control as="select" required="required">
                    <option>3 Mts.</option>
                    <option>3.5 Mts.</option>
                    <option>4 Mts.</option>
                    <option>4.5 Mts.</option>
                    <option>5 Mts.</option>
                  </Form.Control>
                </Form.Group>
                <Form.Row>
                  <Col>
                    <Form.Group>
                      <Form.Label>CONCRETO:</Form.Label>
                      <Form.Control type="number" placeholder="$ Precio" required="required" />
                    </Form.Group>
                  </Col>
                  <Col>
                  <Form.Group>
                      <Form.Label>MALLA SOLDADA:</Form.Label>
                      <Form.Control type="number" placeholder="$ Precio" required="required" />
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group controlId="exampleForm.ControlSelect2">
                      <Form.Label>TIPO DE VARILLA:</Form.Label>
                      <Form.Control as="select" required="required">
                        <option>VIG-BOV Alma Abierta</option>
                        <option>VIG-BOV Pretensada</option>
                        <option>LOSA SÓLIDA Y VAR. G42</option>
                        <option>LOSA ALIGERADA Y VAR. G42</option>
                      </Form.Control>
                    </Form.Group>
                  </Col>
                </Form.Row>
                <Form.Group as={Row}>
                  <Col>
                    <Button type="submit" className="btn negro" style={{float:'right'}}>CALCULAR RESULTADOS</Button>
                  </Col>
                </Form.Group>
              </Form>
            </div>
            
          </div>
          <div class="column resultados">
            <h1>RESULTADOS</h1>
          </div>
        </section>
      </div>
    );
  }
}
 
export default Contenido;