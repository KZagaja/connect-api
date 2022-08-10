import express, { Response, Request } from "express";
import { auth } from "../middleware/auth";
import User from "../schemas/schemas/user";

const router = express.Router();

router.get("/", auth, async (res: Response, req: Request) => {
  const response = await User.find();
  res.status(200).send(response);
});

export default router;
