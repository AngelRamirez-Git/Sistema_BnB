import React from 'react';
import './room-template.css';
import room_image from './luxury.png';

export const Room_Template = () => {

  
  return (
    <div className="room-container">
      <div className="room_image-container">
        <img className="image" src={room_image} alt="room"/>
      </div>
      <div className="room_lore-container">
        <h1>Habitación de Lujo</h1>
        <dl>
          <dt><b>Descripción</b></dt>
          <dd>Amplia y lujosamente amueblada, con un equilibrio entre el diseño tradicional coreano y el confort moderno. Incluye detalles artísticos y artesanías locales.</dd>
          <br></br>
          <dt><b>Características</b></dt>
          <dd>Cama de tamaño king, área de estar, TV de pantalla plana, minibar, Wi-Fi de alta velocidad, aire acondicionado y calefacción avanzados. Baño amplio con acabados de alta calidad y jacuzzi o bañera.</dd>
          <br></br>
          <dt><b>Vista</b></dt>
          <dd>Grandes ventanas o balcón privado con vistas a los paisajes naturales circundantes o al jardín principal.</dd>
          <br></br>
          <dt><b>Tamaño</b></dt>
          <dd>Ideal para parejas o viajeros que buscan un espacio más amplio y lujoso.</dd>
          <br></br>
          <hr></hr>
          <dt><b>Precio</b></dt>
          <dd>$ 150 USD por Noche</dd>
        </dl>
      </div>
    </div>
  );
};

export default Room_Template;
