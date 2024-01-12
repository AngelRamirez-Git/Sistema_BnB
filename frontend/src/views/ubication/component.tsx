import React, { FC, useState, useEffect } from 'react';
import './ubication.css';
import cyclist from './cyclist.jpg';
import ice_skating from './ice_skating.jpg';
import snow_boarding from './snow_boarding.png';

export const Ubication: FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [cyclist, ice_skating, snow_boarding];

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Cambia la imagen cada 3 segundos

    return () => clearTimeout(timer);
  }, [currentIndex, images.length]);

  return (
    <div className="ubication-container">
      <div className="map-and-title-container">
        <h1>Encuentra nuestro Hanok!</h1>
        <div className='map-container'>
          <iframe 
            className='map'
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3161.878884805553!2d126.982371610813!3d37.5814695719182!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca2daaff8c14f%3A0xcdbcbaa9ffc9e59a!2sBukchon%20Hanok%20Village!5e0!3m2!1ses-419!2smx!4v1704421321047!5m2!1ses-419!2smx" />
        </div>
        <div className='map-lore'>
          <p><b>Ubicación:</b> Gyedong-gil, Jongno-gu, Seoul, Corea del Sur</p>
          <br></br>
          <h4>Reservaciones en:</h4>
          <p><b>Teléfono:</b> 5578992407</p>
          <p><b> Horarios de Atención: </b></p>
        <p>Martes a viernes de 10:00 a 18:00 horas</p>
        <p>Sábado y domingo de 10:00 a 17:00 horas</p>  
        </div>
      </div>
      <div className="activities-lore">
        <h2>Actividades cerca de nosotros</h2>
        <div className="carousel">
          {/* Mostrar solo la imagen actual basada en currentIndex */}
          <img src={images[currentIndex]} alt="Activity" />
        </div>
        {/* Aquí puedes añadir más contenido relacionado con las actividades si es necesario */}
      </div>
    </div>
  );
};

export default Ubication;

