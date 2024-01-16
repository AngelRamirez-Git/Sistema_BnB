import { model, Schema, Types } from 'mongoose';

export const UserSchema = new Schema({
  email: { type: String, lowercase: true, require: true },
  username: { type: String },
  password: { type: String, require: true },
});

export const UserMongo = model('User', UserSchema);