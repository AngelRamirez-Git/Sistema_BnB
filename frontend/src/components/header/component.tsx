import React, { FC, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './header.css';
import logo from './logo.jpg';
import services from './services_icon.png';
import information from './information_icon.png';
import ubication from './ubication_icon.png';
import login from './login_icon.png';
import homepage from './home_icon.png';
import AuthContext from '../../context/AuthProvider';

export const Header: FC = () => {
  const { auth } = useContext(AuthContext);

  return (
    <header className="header-container">
      <div className="logo-container">
        <img src={logo} alt="logo"/>
      </div>
      <nav className="primary-navigation">
        <ul>
          <li>
            <Link to={"/"}>
              <div className="menu-item">
                <img src={homepage} alt="Inicio" className="mini-logo"/>
                <span>Inicio</span>
              </div>
            </Link>
          </li>
          <li>
            <Link to={"/about_us"}>
              <div className="menu-item">
                <img src={information} alt="Nosotros" className="mini-logo"/>
                <span>Nosotros</span>
              </div>
            </Link>
          </li>
          <li>
            <Link to={"/ubication"}>
              <div className="menu-item">
                <img src={ubication} alt="Ubicación" className="mini-logo"/>
                <span>Ubicación</span>
              </div>
            </Link>
          </li>
          <li>
            <Link to={"/rooms"}>
              <div className="menu-item">
                <img src={services} alt="Habitaciones" className="mini-logo"/>
                <span>Habitaciones</span>
              </div>
            </Link>
          </li>
          <li>
            {auth == null ?  
            <Link to={"/login"}>
              <div className="menu-item">
                <img src={login} alt="Iniciar Sesión" className="mini-logo"/>
                <span>Iniciar Sesión</span>
              </div>
            </Link>
            : 
            <Link to={"/logout"}>
              <div className="menu-item">
                <img src={login} alt="Iniciar Sesión" className="mini-logo"/>
                <span>Cerrar Sesion</span>
              </div>
            </Link> 
            }
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;