import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    profilePicture: { type: String, default: "" },
    isAdmin: { type: Boolean, default: false },
    myList: { type: Array, default: [] },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

export default User;
