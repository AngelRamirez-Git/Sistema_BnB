import React from 'react';
import './room-template.css';
import room_image from './image.png';

export const Room_Template = () => {
  return (
    <div className="room-container">
      <div className="room_image-container">
        <img className="image" src={room_image} alt="room"/>
      </div>
      <div className="room_lore-container">
        <h1>Tipo de Habitación</h1>
        <dl>
          <dt><b>Comodidades</b></dt>
          <dd>x</dd>
          <dt><b>Vista</b></dt>
          <dd>x</dd>
          <dt><b>Tamaño</b></dt>
          <dd>x</dd>
          <dt><b>Precio</b></dt>
          <dd>$ x USD</dd>
          <hr></hr>
          <dt><b>Precio</b></dt>
          <dd>$ x USD</dd>
          <dt><b>Precio</b></dt>
          <dd>$ x USD</dd>
          <dt><b>Precio</b></dt>
          <dd>$ x USD</dd>
          <dt><b>Precio</b></dt>
          <dd>$ x USD</dd>
          <dt><b>Precio</b></dt>
          <dd>$ x USD</dd>
          
        </dl>
      </div>
    </div>
  );
};

export default Room_Template;
