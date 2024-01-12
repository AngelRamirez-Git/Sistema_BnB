import  { Handler, Request, Response} from 'express';
import { RoomMongo } from '../../models/room'
import { UserMongo } from '../../models/user';

export const getRooms: Handler = async (req: Request, res: Response) => {
    const users = await RoomMongo.find();
    return res.status(200).send(users);
}

export const getRoomByType: Handler = async (req: Request, res: Response) => {
    const room_type = req.params.room_type;
    try {
       const room = await RoomMongo.findOne({ room_type: room_type });
        if (room) {
            return res.status(200).send(room);
        } else {
            return res.status(404).send('Room not found');
        }
    } catch (error) {
        return res.status(500).send('Error en el servidor');
    }
};

export const createRoom: Handler = async (req: Request, res: Response) => {
    try {
        const existingRoom = await RoomMongo.findOne({ room_type: req.body.room_type })
        if (existingRoom) {
            return res.status(400).send('Room already exists');
        }
        
        const room = new RoomMongo(req.body);
        await room.save();
        return res.status(201).send(room);
    } catch (error) {
        return res.status(500).send(`Error en el servidor ${error}`);
    }
};

export const updateRoomToUser: Handler = async (req: Request, res: Response) => {
    const emailRequest: string = req.body.user.email;
    
    if (emailRequest == null) return res.status(404).send({ error: 'User email is null' });
    
    if (!(await UserMongo.find({email: emailRequest}))) {
        return res.status(404).send({ error: 'User email is not registered' });
    }

    await RoomMongo.findOneAndUpdate(req.body.room_type, req.body.user);
    const room = await RoomMongo.findOne({ email: emailRequest });
    return res.status(200).send(room);
};

export const updateRoom: Handler = async (req: Request, res: Response) => {
    if (req.body.room_type == null) return res.status(404).send({ error: 'Room type is null' });

    await RoomMongo.findOneAndUpdate(req.body.room_type, req.body);
    const room = await RoomMongo.find({ room_type: req.body.room_type });
    return res.status(200).send(room);
};