import axios from 'axios';
import { User } from '../types/user';

const API = 'http://localhost:3001';

export const loginRequest = (user: any)  => {
    axios.post(`${API}/login`, user)
}