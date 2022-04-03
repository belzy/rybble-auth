import { Schema, model }  from 'mongoose';

interface IUser {
  user_id: number;
  password: string;
  salt: string;
  auth_type: 'email' | 'facebook' | 'google' | 'twitter';
};

const UserSchema = new Schema<IUser>({
  user_id: { type: Number, required: true, unique: true },
  password: { type: String, required: true },
  salt: { type: String, required: true },
  auth_type: { type: String, required: true }
});

const UserModel = model<IUser>('User', UserSchema);

export default UserModel;