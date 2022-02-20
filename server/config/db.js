import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    // {
    //   useUnifiedTopology: true,
    //   useNewUrlParser: true,
    //   useCreateIndex: true,
    // }
    const connect = await mongoose.connect(`mongodb://${process.env.HOST}:${process.env.DB_PORT}`)
    console.log(`MongoDB connected: ${connect.connection.host} on port ${process.env.DB_PORT}`);
  } catch (err) {
    console.error(`Error: ${err.message}`);
    process.exit(1)
  }
}

export default connectDB
