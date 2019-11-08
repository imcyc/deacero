import React from 'react';
import data from "../../data";

const Resultados = (props) => {
  const {area, destino, longitud, concretoPrecio, mallaPrecio, tipo} = props;
  data.tipo.map(dato => {
    if(tipo === dato.nombre){
      if(parseFloat(longitud) === dato.datos.longitud && destino === dato.datos.destino){
        console.log(dato.datos.precio);
      }
    }else{
      console.log('naranjas');
    }
  })
  return (
    <div className="Resultados">
      <h1><i className="material-icons">keyboard_arrow_right</i> RESULTADOS</h1>
      <hr/>
      <div className="datos">
        <div>
          <h2><i className="material-icons">keyboard_arrow_right</i> Área en Mts<sup>2</sup>:</h2>
          <p>{area} Mts. <sup>2</sup></p>
          <h2><i className="material-icons">keyboard_arrow_right</i> Precio Concreto:</h2>
          <p>$ {concretoPrecio}.00 MXN</p>
        </div>
        <div>
          <h2><i className="material-icons">keyboard_arrow_right</i> Destino:</h2>
          <p>{destino}</p>
          <h2><i className="material-icons">keyboard_arrow_right</i> Precio Malla:</h2>
          <p>$ {mallaPrecio}.00 MXN</p>
        </div>
        <div>
          <h2><i className="material-icons">keyboard_arrow_right</i> Longitud:</h2>
          <p>{longitud} Mts.</p>
          <h2><i className="material-icons">keyboard_arrow_right</i> Tipo de Malla:</h2>
          <p>{tipo}</p>
        </div>
      </div>
      <hr/>
    </div>
  );
}
 
export default Resultados;