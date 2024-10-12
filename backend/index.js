import dotenv from "dotenv";
dotenv.config({ path: ".env" });
console.log(process.env.MONGO_URI);
import express from "express";

import databaseConnection from "./utils/database.js";
import cookieParser from "cookie-parser";

databaseConnection();

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());

const PORT = process.env.PORT || 9090;
app.listen(PORT, () => {
  console.log(`Server listening at port ${PORT}`);
});
