import  { Handler, Request, Response} from 'express';
import { UserMongo, UserSchema } from '../../models/user'
import { RoomMongo } from '../../models/room'

import  util from 'util';

export const getUsers: Handler = async (req: Request, res: Response) => {
    const users = await UserMongo.find();
    return res.status(200).send(users);
}

export const createUser: Handler = async (req: Request, res: Response) => {
    try {
        const existingUser = await UserMongo.findOne({ email: req.body.email });
        if (existingUser) {
            return res.status(400).send('El correo electrónico ya está registrado');
        }
        
        const user = new UserMongo(req.body);
        await user.save();
        return res.status(201).send(user);
    } catch (error) {
        return res.status(500).send(`Error en el servidor ${error}`);
    }
};

export const getUserByEmail: Handler = async (req: Request, res: Response) => {
    const email = req.params.email;
    try {
       const user = await UserMongo.findOne({ email: email });
        if (user) {
            return res.status(200).send(user);
        } else {
            return res.status(404).send('Usuario no encontrado');
        }
    } catch (error) {
        return res.status(500).send('Error en el servidor');
    }
};

export const deleteUser: Handler = async (req: Request, res: Response) => {
    await UserMongo.deleteMany({});
    await RoomMongo.deleteMany({});
    return res.status(200).send("pene");
};