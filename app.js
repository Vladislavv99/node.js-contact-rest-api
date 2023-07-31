import express from "express";
import logger from "morgan";
import cors from "cors";

const app = express.Router();

const formatsLogger = app.get("env") === "development" ? "dev" : "short";

app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());

app.use("");

export default app;