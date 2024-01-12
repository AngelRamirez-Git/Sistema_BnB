import { User } from "./user";

export enum RoomType {
    STANDARD = 'standard',
    TRADITIONAL = 'traditional',
    DELUXE = 'deluxe',
}

export interface Room {
    _id: string;
    room_type: RoomType;
    availability: boolean;
    user: User;
}