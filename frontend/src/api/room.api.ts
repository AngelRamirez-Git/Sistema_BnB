import axios from 'axios';
import { Room } from '../types/room';
const API = 'http://localhost:3001';
// apuntar al backed y sacar los datos
// GET: localhost:3001/rooms/:luxury
// service y lo pones aca ;)

export const getRooms = ()  => {
    const response = axios.get<Room>(`${API}/rooms`)
    .catch(err => console.log(err));

    return response;
}

export const getRooms_Deluxe = ()  => {
    axios.get(`${API}/room/deluxe`)
    .catch(err => console.log(err));
}

export const getRooms_Traditional = ()  => {
    axios.get(`${API}/room/traditional`)
    .catch(err => console.log(err));
}

export const getRooms_Standard = ()  => {
    axios.get(`${API}/room/standard`)
    .catch(err => console.log(err));
}