import mongoose, { Schema } from "mongoose";
import { User } from "../interfaces/IUser";

const userSchema = new Schema<User>(
  {
    username: { type: String, required: true },
    email: { type: String, required: true },
    phoneNumber: { type: Number, required: false },
    avatar: { type: String, required: false },
    token: { type: String },
  },
  {
    timestamps: {
      createdAt: true,
      updatedAt: true,
    },
  }
);

const User = mongoose.model("User", userSchema);
export default User;
