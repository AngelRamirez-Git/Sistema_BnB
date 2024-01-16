import React from 'react';
import './room-template.css';
import room_image from './standard.png';

export const Room_Template = () => {
  return (
    <div className="room-container">
      <div className="room_image-container">
        <img className="image" src={room_image} alt="room"/>
      </div>
      <div className="room_lore-container">
        <h1>Habitación Estándar</h1>
        <dl>
          <dt><b>Descripción</b></dt>
          <dd>Decoración minimalista que refleja la elegancia del estilo tradicional coreano. Suelos de madera y puertas corredizas de papel que ofrecen una experiencia auténtica.</dd>
          <br></br>
          <dt><b>Características</b></dt>
          <dd>Cama tradicional coreana, Wi-Fi, aire acondicionado y calefacción. Baño privado con amenities básicos.</dd>
          <br></br>
          <dt><b>Vista</b></dt>
          <dd>Ventanas que dan a los jardines internos, proporcionando una vista serena y una sensación de tranquilidad.</dd>
          <br></br>
          <dt><b>Tamaño</b></dt>
          <dd>Adecuada para 1 o 2 personas, con espacio suficiente para una estancia confortable sin excesos.</dd>
          <br></br>
          <hr></hr>
          <dt><b>Precio</b></dt>
          <dd>$ 50 USD por noche</dd>
        </dl>
      </div>
    </div>
  );
};

export default Room_Template;
