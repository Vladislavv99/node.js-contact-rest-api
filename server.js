import app from "./app.js";
import dotenv from "dotenv/config";
import mongoose from "mongoose";

const { PORT, DB_HOST } = process.env;

mongoose
  .connect(DB_HOST)
  .then(
    app.listen(PORT, () => {
      console.log(`Server running. Use our API on port: ${PORT}`);
    })
  )
  .catch((err) => console.log(err.message));
