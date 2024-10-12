import dotenv from "dotenv";
dotenv.config();
import mongoose from "mongoose";

const databaseConnection = () => {
  const mongoUri = process.env.MONGO_URI;

  if (!mongoUri) {
    console.error(
      "Error: MONGO_URI is not defined in the environment variables."
    );
    return;
  }

  mongoose
    .connect(mongoUri, {
      useNewUrlParser: true, // Optional for older versions of Mongoose
      useUnifiedTopology: true, // Optional for older versions of Mongoose
    })
    .then(() => {
      console.log("MongoDB connected successfully.");
    })
    .catch((error) => {
      console.error("Error connecting to MongoDB:", error);
    });
};

export default databaseConnection;
