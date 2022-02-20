import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    await mongoose.connect(`mongodb://${process.env.HOST}:${process.env.DB_PORT}`, {
      dbName: process.env.DB_NAME,
      auth: {
        password: process.env.DB_USER_PASSWORD,
        username: process.env.DB_USER_NAME,
      },
    })
    console.log(`MongoDB connected: ${process.env.HOST} on port ${process.env.DB_PORT}`);
  } catch (err) {
    console.error(`Error: ${err.message}`);
    process.exit(1)
  }
}

export default connectDB
