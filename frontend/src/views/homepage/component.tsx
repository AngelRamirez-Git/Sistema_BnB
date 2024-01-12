import { FC } from 'react';
import './homepage.css';
import MyCalendar from '../../components/calendar/component';
import hanok from './hanok.png';
import dragon from './dragon.jpeg';

export const Homepage: FC = () => {
  return (
    <>
      <div className="homepage-container">
        <div className="image-container">
          <img src={hanok} alt="hanok"/>
        </div>
        <div className="homepage-lore-container">
          <p>En "Hanok del Amanecer", te invitamos a vivir una experiencia de descanso y conexión cultural única. Nuestro acogedor bed and breakfast, enclavado en la serena belleza de la arquitectura tradicional coreana, es el destino perfecto para quienes buscan un refugio tranquilo y enriquecedor. Despierta cada mañana con la cálida luz del amanecer bañando tu habitación, un recordatorio pacífico de la belleza simple y elegante que nos rodea.</p>
          <p>Cada rincón de "Hanok del Amanecer" ha sido cuidadosamente diseñado para fusionar la tradición y la modernidad, creando espacios llenos de confort y encanto.</p>
        </div>
      </div>
      <div className="image_dragon-container">
        <img src={dragon} alt="dragon"/>
      </div>
      <div className='calendar'>
      <MyCalendar/>
      </div>
    </>
  );
};

export default Homepage;