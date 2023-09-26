import mongoose from "mongoose";
import colors from "colors";


const connectB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URL);
    console.log(
      `Cnnected To Mongodb Database ${conn.connection.host}`.bgBlue.white
    );
  } catch (error) {
    console.error(`Error in MongoDB: ${error.message}`.bgRed.white);
    process.exit(1); 
  }
};

export default connectB;
