import { Router } from 'express';
import { getUsers, createUser, getUserByEmail, deleteUser } from '../services/user/service';
import { getRooms, createRoom, updateRoom, updateRoomToUser, getRoomByType } from '../services/room/service';

const router: Router = Router();

// Rutas de usuarios
router.get('/users', getUsers);
router.post('/user', createUser);
router.get('/user/:email', getUserByEmail);
router.delete('/delete', deleteUser);

// Rutas de habitaciones
router.get('/rooms', getRooms);
router.get('/room/:room_type', getRoomByType);
router.post('/room', createRoom);
router.patch('/room', updateRoom);
router.patch('/room_user', updateRoomToUser);

export default router;