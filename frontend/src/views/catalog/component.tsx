import { FC, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './catalog.css';
import hanok_1 from './hanok_1.jpg';
import { Room } from '../../types/room';
import luxury from './luxury.png';
import traditional from './traditional.png';
import standard from './standard.png';

export const Catalog: FC = () => {
  return (
    <>
      <div className="rooms-container">
        <div className="image-container">
          <h1>Nuestro Hanok!</h1>
          <img className="image" src={hanok_1} alt="hanok"/>
        </div>
        <div className="type_rooms-container">
          <div className="column">
            <Link to={"/traditional"}>
              <img className="room-image" src={traditional} alt="Habitación Tradicional"/>
              <p>Habitación Tradicional</p>
            </Link>
          </div>
          <div className="column">
            <Link to={"/standard"}>
              <img className="room-image" src={standard} alt="Habitación Estándar"/>
              <p>Habitación Estándar</p>
            </Link>
          </div>
          <div className="column">
            <Link to={"/deluxe"}>
              <img className="room-image" src={luxury} alt="Habitación de Lujo"/>
              <p>Habitación de Lujo </p>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Catalog;