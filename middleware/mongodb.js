import mongoose from 'mongoose';

const connectDB = handler => async (req, res) => {
  console.log('CONNECTING TO MONGO');
  try {
    if (mongoose.connections[0].readyState) {
      // Use current db connection
      console.log('CONNECTED TO MONGO');
      return handler(req, res);
    }
    // Use new db connection
    const connection = await mongoose.connect(process.env.mongodburl, {
    });

    console.log('CONNECTED TO MONGO');
    return handler(req, res);
    
  } catch (error) {
    console.error('Database connection Error: ', error)
    return res.status(500)
  }
 
};

export default connectDB;