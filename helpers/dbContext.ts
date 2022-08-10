import mongoose from "mongoose";

export const connect = async (databaseLink: string): Promise<void> => {
  await mongoose
    .connect(databaseLink)
    .then(() => console.log("Connected to DB"));
};
