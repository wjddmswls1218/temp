import express from "express";
import dotenv from "dotenv";
dotenv.config();
import morgan from "morgan";
import globalRouter from "./router/globalRouter";

const app = express();

const PORT = process.env.PORT;

app.set("view engine", "pug");
app.use(morgan(`dev`));

app.use("/", globalRouter);

app.listen(PORT, (req, res) => {
    console.log(`${PORT} SEVER START`);
});