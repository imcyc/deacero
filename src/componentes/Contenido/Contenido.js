import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Notificaciones from './Notificaciones';
import Resultados from './Resultados';
import './Contenido.css';

class Contenido extends Component {
  constructor(props) {
    super(props);
    this.state = {
      area: 0,
      destino: '',
      longitud: 0,
      concretoPrecio: 0,
      mallaPrecio: 0,
      tipo: '',
      nombre: '',
      altura: 0,
      bkg: '#000000',
      visible: true
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onFocus = this.onFocus.bind(this);
  }
  
  componentDidMount(){
    
    this.setState({
      altura: this.destinoInput.offsetTop
    })
    this.nameInput.focus();
  }
  componentDidUpdate(){
    var x = document.activeElement;
    console.log(x);
  }
  handleSubmit(event) {
    event.preventDefault();
    this.setState({
      area: parseInt(event.target.area.value, 10),
      destino: event.target.destino.value,
      longitud: event.target.longitud.value,
      concretoPrecio: event.target.concretoPrecio.value,
      mallaPrecio: event.target.mallaPrecio.value,
      tipo: event.target.tipo.value,
      bkg: '#f2f2f2',
      visible: false
    });
  }
  onFocus(event) {
    let nombre = event.target.name;
    let alturax = event.target.offsetTop - 13;
    if(nombre === 'tipo' || nombre === 'concretoPrecio' || nombre === 'mallaPrecio'){
      this.setState({
        nombre: nombre,
        altura: alturax + this.state.altura
      })
      console.log('alturaxaxa' + this.state.altura);
    } else {
      this.setState({
        nombre: nombre,
        altura: alturax
      })
    }
  }
  render() { 
    return (
      <div className="wrap-contenido">
        <section>
          <div className="column opciones">
            <div className="titulo">
              <h1>APP LOSAS PARA VIVIENDA</h1>
              <h3>LOSAS EN UNA DIRECCIÓN, SIMPLEMENTE APOYADAS</h3>
              <p><i className="material-icons">location_searching</i> Por Favor ingrese los siguientes datos:</p>
              <Form onSubmit={this.handleSubmit}>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label><i className="material-icons">keyboard_arrow_right</i> Área en Mts<sup>2</sup>.:</Form.Label>
                  <Form.Control 
                    type="number" 
                    name="area" 
                    placeholder="Ingrese el tamaño del área a calcular en Metros Cuadrados" 
                    ref={(input) => { this.nameInput = input; }}
                    onFocus={this.onFocus}
                  />
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlSelect1">
                  <Form.Label><i className="material-icons">keyboard_arrow_right</i> Destino:</Form.Label>
                  <Form.Control 
                    name="destino" 
                    as="select"
                    onFocus={this.onFocus}
                  >
                    <option>AZOTEA</option>
                    <option>ENTREPISO</option>
                  </Form.Control>
                </Form.Group>
                <Form.Group 
                  controlId="exampleForm.ControlSelect2"
                  
                >
                  <Form.Label><i className="material-icons">keyboard_arrow_right</i> Longitud del claro:</Form.Label>
                  <Form.Control 
                    name="longitud" 
                    as="select"
                    ref={(input) => { this.destinoInput = input; }}
                    onFocus={this.onFocus}
                  >
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
                      <Form.Label><i className="material-icons">keyboard_arrow_right</i> CONCRETO:</Form.Label>
                      <Form.Control 
                        name="concretoPrecio" 
                        type="number" 
                        placeholder="Precio"
                        onFocus={this.onFocus} 
                      />
                    </Form.Group>
                  </Col>
                  <Col>
                  <Form.Group>
                      <Form.Label><i className="material-icons">keyboard_arrow_right</i> MALLA SOLDADA:</Form.Label>
                      <Form.Control 
                        name="mallaPrecio" 
                        type="number" 
                        placeholder="Precio"
                        onFocus={this.onFocus}
                      />
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group controlId="exampleForm.ControlSelect2">
                      <Form.Label><i className="material-icons">keyboard_arrow_right</i> TIPO DE VARILLA:</Form.Label>
                      <Form.Control 
                        name="tipo" 
                        as="select"
                        onFocus={this.onFocus} 
                      >
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
          <div className="column resultados" style={{background:this.state.bkg}}>
            {this.state.visible ?
              <Notificaciones altura={this.state.altura} nombre={this.state.nombre} />
            :
              <Resultados />
            }
          </div>
        </section>
      </div>
    );
  }
}
 
export default Contenido;