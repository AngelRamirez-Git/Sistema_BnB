import { FC } from 'react';
import { useForm } from 'react-hook-form';
import './component.css';
import { loginRequest } from '../../api/user.api';
import { User } from '../../types/user';


export const Login: FC = () => {
  const { register, handleSubmit} = useForm<User>();

  return (
    <div className="login-container">
      <h2>Iniciar Sesión</h2>
      <form onSubmit={handleSubmit( async (values) => {
        const res = await loginRequest(values)
      })}>
        <div className="form-group">
          <label htmlFor="user">Usuario: </label>
          <input type="email" id="email" {...register("email", { required: true })}/>
        </div>
        <div className="form-group">
          <label htmlFor="password">Contraseña: </label>
          <input type="password" id="password" {...register("password", { required: true })}/>
        </div>
        <button type="submit">Iniciar Sesión</button>
      </form>
    </div>
  );
};

export default Login;
