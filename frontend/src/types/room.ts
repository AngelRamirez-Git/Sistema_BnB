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

  description: string,
  characteristics: string,
  price: string,
  view: string,
  size: string,
  inicio: string,
  final: string
}