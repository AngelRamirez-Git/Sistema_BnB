import { FC } from 'react';
import './footer.css';

export const Footer: FC = () => {
  return (
    <>
      <div className="footer-container">
        <div className="footer-section">
            <h3>Contacto</h3>
            <p>Dirección: ESCOM IPN, Unidad Profesional Adolfo López Mateos, Av. Juan de Dios Bátiz, Nueva Industrial Vallejo, Gustavo A. Madero, 07320 Ciudad de México, CDMX</p>
            <p>Teléfono: 5578992407</p>
            <p>Email: ahrc_mk@hotmail.com</p>
        </div>
        <div className="footer-section">
            <h3>Enlaces Rápidos</h3>
            <ul>
                <li><a href="/about_us">Acerca de Nosotros</a></li>
                <li><a href="/rooms">Servicios</a></li>
                <li><a href="/ubication">Contacto</a></li>
            </ul>
        </div>
        <div className="footer-section">
            <h3>Síguenos</h3>
            <p>
                <a href="#">Facebook</a> |
                <a href="#">Twitter</a> |
                <a href="#">Instagram</a>
            </p>
        </div>
    </div>
    <div className="footer-bottom">
        <p>&copy; 2024 ESCOM. Análisis y Diseño de Sistemas | Todos los derechos reservados.</p>
    </div>
    </>
  );
};

export default Footer;