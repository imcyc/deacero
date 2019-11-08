import React from 'react';

const Notificaciones = (props) => {
  return (
    <div className="Notificaciones" style={{top:props.altura}}>
        <p><i className="material-icons">keyboard_arrow_left</i> INGRESAR: <b>{props.nombre.toUpperCase()}</b></p>
    </div>
  );
}
 
export default Notificaciones;