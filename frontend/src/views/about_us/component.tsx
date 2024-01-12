import { FC } from 'react';
import './about_us.css';
import family from './family_Kim.png';

export const AboutUs: FC = () => {
  return (
    <>
      <div className="aboutus-container">
        <div className="aboutus-lore-container">
          <h1>Sobre nosotros</h1>
          <p><b>Hanok del Amanecer</b> es un bed and breakfast que combina la serenidad de la arquitectura tradicional coreana con la calidez de la hospitalidad moderna. Fundado por la familia Kim, quienes restauraron un ancestral Hanok para compartir su pasión por la cultura coreana, este lugar ofrece una ventana al pasado en un entorno de tranquilidad y belleza natural.</p>
          <p>El nombre "Hanok del Amanecer" proviene de las impresionantes vistas del amanecer que se disfrutan desde sus habitaciones, simbolizando nuevos comienzos y la armonía con la naturaleza. Aquí, los huéspedes no solo encuentran un lugar para descansar, sino un espacio para reconectar con la historia y las tradiciones coreanas, a través de experiencias como clases de cocina y ceremonias del té.</p>
          <p>"Hanok del Amanecer" se ha convertido en un destino predilecto para aquellos que buscan un retiro tranquilo y una inmersión auténtica en la rica herencia cultural de Corea.</p>
        </div>
        <div className="family_Kim-container">
          <img src={family} alt="family_Kim"/>
        </div>
      </div>
    </>
  );
};

export default AboutUs;