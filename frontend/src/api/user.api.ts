import axios from 'axios';
import { User} from '../types/user';

const API = 'http://localhost:3001';

export const loginRequest = (user: any)  => {
    const response = axios.post<User>(`${API}/login`, user, {
        withCredentials: true
    })
    .catch(err => alert("Datos Incorrect"));

    return response;
}