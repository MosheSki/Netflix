import bcrypt from "bcryptjs";
import User from "../models/User.js";
import { generateToken } from "../utils.js";
import validator from "validator";

//REGISTER
const register = async (req, res) => {
  const { username, email, password } = req.body;

  if (!validator.isEmail(email)) {
    return res.status(400).json({ message: "Invalid email format" });
  }

  const newUser = new User({
    username: username,
    email: email,
    password: bcrypt.hashSync(password),
  });

  const user = await newUser.save();

  res.send({
    _id: user._id,
    username: user.username,
    email: user.email,
    token: generateToken(user),
  });
};

//LOGIN
const login = async (req, res) => {
  const { password: passwordFromWebsite, email } = req.body;

  const user = await User.findOne({ email: email });
  if (user) {
    if (bcrypt.compareSync(passwordFromWebsite, user.password)) {
      res.send({
        _id: user._id,
        username: user.username,
        email: user.email,
        token: generateToken(user),
      });
      return;
    }
  }
  res.status(401).send({ message: "Invalid User/Password" });
};

//DELETE
const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;

    // Check if the user is an admin
    if (req.user.isAdmin) {
      // Admin can delete any account
      await User.findByIdAndDelete(id);
      return res.status(200).json({ message: "User has been deleted" });
    }

    // Check if the user is trying to delete their own account
    if (req.user._id === id) {
      // User can delete their own account
      await User.findByIdAndDelete(id);
      return res.status(200).json({ message: "Your account has been deleted" });
    }

    // User is neither admin nor trying to delete their own account
    return res
      .status(403)
      .json({ message: "You can only delete your own account" });
  } catch (error) {
    // Handle errors
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export { register, login, deleteUser };
