import React from 'react';
import './room-template.css';
import room_image from './traditional.png';

export const Room_Template = () => {
  return (
    <div className="room-container">
      <div className="room_image-container">
        <img className="image" src={room_image} alt="room"/>
      </div>
      <div className="room_lore-container">
        <h1>Habitación Tradicional</h1>
        <dl>
          <dt><b>Descripción</b></dt>
          <dd>Un híbrido de diseño moderno y elementos tradicionales coreanos. Mobiliario contemporáneo combinado con arte y decoración coreana.</dd>
          <br></br>
          <dt><b>Características</b></dt>
          <dd>Cama de tamaño queen, área de trabajo, Wi-Fi, TV, sistema de aire acondicionado y calefacción. Baño privado moderno con todas las comodidades necesarias.</dd>
          <br></br>
          <dt><b>Vista</b></dt>
          <dd>Ventanas que ofrecen una mezcla de vistas al jardín interior y a la arquitectura tradicional del hanok.</dd>
          <br></br>
          <dt><b>Tamaño</b></dt>
          <dd>Perfecta para viajeros de negocios o parejas que desean una mezcla de modernidad y tradición.</dd>
          <br></br>
          <hr></hr>
          <dt><b>Precio</b></dt>
          <dd>$ 100 USD por noche</dd>
        </dl>
      </div>
    </div>
  );
};

export default Room_Template;
