import app from "./app.js";
import dotenv from "dotenv/config";

const { PORT } = process.env;

app.listen(PORT, () => {
  console.log(`Server running. Use our API on port: ${PORT}`);
});
