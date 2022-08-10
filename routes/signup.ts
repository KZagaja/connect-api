import express, { Response, Request } from "express";
import jwt from "jsonwebtoken";
import User from "../schemas/schemas/user";

const router = express.Router();

router.post("/signup", async (req: Request, res: Response) => {
  if (req.body) {
    const { username, email, avatar, phoneNumber } = req.body;

    const oldUser = await User.findOne({ email });

    if (oldUser) {
      return res.status(409).send("User with this email already exisit");
    }

    const user = new User({
      username,
      email: email.toLowerCase(),
      avatar: avatar ? avatar : null,
      phoneNumber: phoneNumber ? phoneNumber : null,
    });

    const token = jwt.sign(
      { user_id: user._id, email },
      process.env.TOKEN_KEY,
      { expiresIn: "2h" }
    );

    user.token = token;

    await user.save();
    return res.status(201).send(user);
  }

  return res.status(400).send("Singup data not provided");
});

export default router;
