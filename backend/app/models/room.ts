import { model, Schema, Types } from 'mongoose';
import { UserSchema } from './user';

export enum RoomType {
  STANDARD = 'standard',
  TRADITIONAL = 'traditional',
  DELUXE = 'deluxe',
}

const RoomSchema = new Schema({
  user: { type: UserSchema, default: null },
  availability: { type: Boolean, require: true, select: true },
  room_type: { type: String, enum: RoomType, unique: true, require: true},
});

export const RoomMongo = model('Room', RoomSchema);