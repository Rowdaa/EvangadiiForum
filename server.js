require("dotenv").config();
const pool = require("./Server/CONFIG/database");
const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT;

const userRouter = require("./Server/API/users/user.router");

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/API/users", userRouter);

app.listen(port, () => console.log(`Listening at http://localhost:${port}`));
