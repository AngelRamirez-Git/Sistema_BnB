import { FC, useState, useContext } from 'react';
import { useForm } from 'react-hook-form';
import './component.css';
import { loginRequest } from '../../api/user.api';
import { User } from '../../types/user';
import AuthContext from '../../context/AuthProvider';
import Cookies from 'js-cookie';

export const Login: FC = () => {
  const { register, handleSubmit} = useForm<User>();
  const [values, setValues] = useState<User>();
  const { auth, setAuth } = useContext(AuthContext);

  return (
    <div className="login-container">
      {auth == null ?
        <form onSubmit = {
          handleSubmit( async(values) => {
            const res = await loginRequest(values);
            if(res != null){
              const email = res?.data.email;
              const token = Cookies.get("token");
              const username = res?.data.username;
              const _id = res?.data.password;
              setAuth({_id, email, username, token});
            }
          })}>
          <div className="form-group">
            <label htmlFor="user">Email: </label>
            <input type="email" id="email" {...register("email", { required: true })}/>
          </div>
          <div className="form-group">
            <label htmlFor="password">Contraseña: </label>
            <input type="password" id="password" {...register("password", { required: true })}/>
          </div>
          <button type="submit">Iniciar Sesión</button>
        </form>
        : 
        <>
          <div>Bienvenido {auth.username}</div>
          <div>Correo registrado {auth.email}</div>
        </>
        }
    </div>
  );
};

export default Login;
