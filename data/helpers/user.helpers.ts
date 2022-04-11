import { UserModel } from '../models';

type TUser = {
  user_id: number
  password: string
  salt: string
  auth_type: 'facebook' | 'google' | 'twitter' | 'email'
};

const createUser = async ({ user_id, password, salt, auth_type }: TUser): Promise<void> => {

  const doc = new UserModel({
    user_id,
    password,
    salt,
    auth_type
  });

  await doc.save();

};

export {
  createUser,
};