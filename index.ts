import express, { Express, Request, Response } from "express";
import { connect } from "./helpers/dbContext";
import users from "./routes/users";
import signup from "./routes/signup";
import dotenv from "dotenv";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is listening at address http://localhost:${port}`);
});

connect(process.env.DB).catch((err) => console.error(err));

app.use("/api/users", users);
app.use("/api/signup", signup);
