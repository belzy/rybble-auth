import mongoose from 'mongoose';
import UserModel from './user.model';

const DATABASE_URL = process.env.LOCAL_DATABASE_URL || '';

// Connect to mongodb. Do not need to wait for successful connection to use models.
console.log(`[server] Connecting to MongoDB database...`);
mongoose.connect(DATABASE_URL)
  .then(() => {
    console.log(`[server] Successfully connected to database`);
  }).catch(console.error);

export {
  UserModel,
};