import { FC } from 'react';
import './component.css';

export const Login: FC = () => {
  return (
    <div className="login-container">
      <h2>Iniciar Sesión</h2>
      <form action="/login" method="POST">
        <div className="form-group">
          <label htmlFor="user">Usuario: </label>
          <input type="user" id="user" name="user" required />
        </div>
        <div className="form-group">
          <label htmlFor="password">Contraseña: </label>
          <input type="password" id="password" name="password" required />
        </div>
        <button type="submit">Iniciar Sesión</button>
      </form>
    </div>
  );
};

export default Login;
