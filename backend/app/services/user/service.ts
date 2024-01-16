import  { Handler, Request, Response} from 'express';
import { UserMongo, UserSchema } from '../../models/user';
import { RoomMongo } from '../../models/room';
import { createAccessToken } from '../../libs/jwt';
//import * as bcrypt from 'bcrypt-ts';

export const getUsers: Handler = async (req: Request, res: Response) => {
    const users = await UserMongo.find();
    return res.status(200).send(users);
}

export const registerUser: Handler = async (req: Request, res: Response) => {
    try {
        const existingUser = await UserMongo.findOne({ email: req.body.email });
        if (existingUser) {
            return res.status(400).send('El correo electrónico ya está registrado');
        }
        const passwordHash = req.body.password; //await bcrypt.hash(req.body.password, 10);

        
        const user = new UserMongo({
            email: req.body.email,
            username: req.body.username,
            password: passwordHash,
        });

        const userSaved = await user.save();

        const token = await createAccessToken({ id: userSaved._id });

        res.cookie('token', token);
        
        return res.status(201).send(userSaved);
    } catch (error) {
        return res.status(500).send(`Error en el servidor ${error}`);
    }
};

export const loginUser: Handler = async (req: Request, res: Response) => {
    const email: string = req.body.email;
    const password: string = req.body.password

    try {
       const user = await UserMongo.findOne({ email: email });

       if(!user) return res.status(404).send('User not found');

       const isMatch: boolean = password == user.password;//await bcrypt.compare(password, user.password);

       if(!isMatch) return res.status(404).send('Wrong password');

       const token = await createAccessToken({ id: user._id });
       console.log('token=',token);
       res.cookie('token', token);
       return res.status(200).send(user);
    } catch (error) {
        return res.status(500).send('Error en el servidor');
    }
};

export const logoutUser: Handler = async (req: Request, res: Response) => {
    res.cookie("token", "", {
        expires: new Date(0),
    });

    return res.status(200);
};

export const deleteUser: Handler = async (req: Request, res: Response) => {
    await UserMongo.deleteMany({});
    await RoomMongo.deleteMany({});
    return res.status(200).send("pene");
};