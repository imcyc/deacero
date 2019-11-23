import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import data from "../../data";

const Resultados = (props) => {
  const {area, destino, longitud, concretoPrecio, mallaPrecio, tipo, factorGlobal} = props;
  let costo, espesor, costoTotal;
  console.log("el tipo: " + tipo);
  data.tipo.map(dato => {
    if(tipo === dato.nombre){
      if(parseFloat(longitud) === dato.datos.longitud && destino === dato.datos.destino){
        console.log(dato.datos.precio);
        costo = (dato.datos.precio * factorGlobal).toFixed(2);
        espesor = dato.datos.espesor;
        costoTotal = (costo * area).toFixed(2);
      }
    }else{
      console.log('naranjas');
    }
  })
  return (
    <div className="Resultados">
      <h1><i className="material-icons">keyboard_arrow_right</i> RESULTADOS</h1>
      <hr/>
      
      <Row>
        <Col>
          <h2><i className="material-icons">keyboard_arrow_right</i> Área en Mts<sup>2</sup>:</h2>
          <p>{area} Mts. <sup>2</sup></p>
          <h2><i className="material-icons">keyboard_arrow_right</i> Precio Concreto:</h2>
          <p>$ {concretoPrecio}.00 MXN</p>
        </Col>
        <Col>
          <h2><i className="material-icons">keyboard_arrow_right</i> Destino:</h2>
          <p>{destino}</p>
          <h2><i className="material-icons">keyboard_arrow_right</i> Precio Malla:</h2>
          <p>$ {mallaPrecio}.00 MXN</p>
        </Col>
        <Col>
          <h2><i className="material-icons">keyboard_arrow_right</i> Longitud:</h2>
          <p>{longitud} Mts.</p>
          <h2><i className="material-icons">keyboard_arrow_right</i> Tipo de Malla:</h2>
          <p>{tipo}</p>
        </Col>
      </Row>
      <hr/>
      
      <Row className="rex tit">
        <Col>
          <h1><i className="material-icons">keyboard_arrow_right</i> VIG-BOV Alma Abierta</h1>
        </Col>
      </Row>
      <Row className="rex">
        <Col>
          <h2><i className="material-icons">keyboard_arrow_right</i> Espesor de la Losa:</h2>
          <p>{espesor} cm</p>
        </Col>
        <Col>
          <h2><i className="material-icons">keyboard_arrow_right</i> Costo:</h2>
          <p>$ {costo} por M<sup>2</sup></p>
        </Col>
        <Col>
          <h2><i className="material-icons">keyboard_arrow_right</i> Costo Total:</h2>
          <p>$ {costoTotal}</p>
        </Col>
        <Col>
          <h2><i className="material-icons">keyboard_arrow_right</i> Cimbrado:</h2>
          <p>1.6 Jor.</p>
        </Col>
        <Col>
          <h2><i className="material-icons">keyboard_arrow_right</i> Ejecución Total:</h2>
          <p>4.9 Jor.</p>
        </Col>
      </Row>
      <hr/>
      <Row className="rex tit">
        <Col>
          <h1><i className="material-icons">keyboard_arrow_right</i> VIG-BOV Pretensada</h1>
        </Col>
      </Row>
      <Row className="rex">
        <Col>
          <h2><i className="material-icons">keyboard_arrow_right</i> Espesor de la Losa:</h2>
          <p>{espesor} cm</p>
        </Col>
        <Col>
          <h2><i className="material-icons">keyboard_arrow_right</i> Costo:</h2>
          <p>$ {costo} por M<sup>2</sup></p>
        </Col>
        <Col>
          <h2><i className="material-icons">keyboard_arrow_right</i> Costo Total:</h2>
          <p>$ {costoTotal}</p>
        </Col>
        <Col>
          <h2><i className="material-icons">keyboard_arrow_right</i> Cimbrado:</h2>
          <p>1.6 Jor.</p>
        </Col>
        <Col>
          <h2><i className="material-icons">keyboard_arrow_right</i> Ejecución Total:</h2>
          <p>4.9 Jor.</p>
        </Col>
      </Row>
      <hr/>
      <Row className="rex tit">
        <Col>
          <h1><i className="material-icons">keyboard_arrow_right</i> LOSA SÓLIDA Y VAR. G42</h1>
        </Col>
      </Row>
      <Row className="rex">
        <Col>
          <h2><i className="material-icons">keyboard_arrow_right</i> Espesor de la Losa:</h2>
          <p>{espesor} cm</p>
        </Col>
        <Col>
          <h2><i className="material-icons">keyboard_arrow_right</i> Costo:</h2>
          <p>$ {costo} por M<sup>2</sup></p>
        </Col>
        <Col>
          <h2><i className="material-icons">keyboard_arrow_right</i> Costo Total:</h2>
          <p>$ {costoTotal}</p>
        </Col>
        <Col>
          <h2><i className="material-icons">keyboard_arrow_right</i> Cimbrado:</h2>
          <p>1.6 Jor.</p>
        </Col>
        <Col>
          <h2><i className="material-icons">keyboard_arrow_right</i> Ejecución Total:</h2>
          <p>4.9 Jor.</p>
        </Col>
      </Row>
      <hr/>
      <Row className="rex tit">
        <Col>
          <h1><i className="material-icons">keyboard_arrow_right</i> LOSA ALIGERADA Y VAR. G42</h1>
        </Col>
      </Row>
      <Row className="rex">
        <Col>
          <h2><i className="material-icons">keyboard_arrow_right</i> Espesor de la Losa:</h2>
          <p>{espesor} cm</p>
        </Col>
        <Col>
          <h2><i className="material-icons">keyboard_arrow_right</i> Costo:</h2>
          <p>$ {costo} por M<sup>2</sup></p>
        </Col>
        <Col>
          <h2><i className="material-icons">keyboard_arrow_right</i> Costo Total:</h2>
          <p>$ {costoTotal}</p>
        </Col>
        <Col>
          <h2><i className="material-icons">keyboard_arrow_right</i> Cimbrado:</h2>
          <p>1.6 Jor.</p>
        </Col>
        <Col>
          <h2><i className="material-icons">keyboard_arrow_right</i> Ejecución Total:</h2>
          <p>4.9 Jor.</p>
        </Col>
      </Row>
      <hr/>
    </div>
  );
}
 
export default Resultados;