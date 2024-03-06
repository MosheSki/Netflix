import List from "../models/List.js";
import User from "../models/User.js";

//CREATE
const create = async (req, res) => {
  if (req.user.isAdmin) {
    const newList = new List(req.body);

    try {
      const savedList = await newList.save();
      res.status(201).json(savedList);
    } catch (error) {
      res.status(500).json(error);
    }
  } else {
    res.status(403).json("You are Not allowed!");
  }
};

//DELETE
const deleteList = async (req, res) => {
  if (req.user.isAdmin) {
    try {
      await List.findByIdAndDelete(req.params.id);
      res.status(201).json("The List has been Deleted!");
    } catch (error) {
      res.status(500).json(error);
    }
  } else {
    res.status(403).json("You are Not allowed!");
  }
};

//GET
const get = async (req, res) => {
  const typeQuery = req.query.type;
  const genreQuery = req.query.genre;
  let list = [];

  try {
    if (typeQuery) {
      if (genreQuery) {
        list = await List.aggregate([
          { $sample: { size: 10 } },
          { $match: { type: typeQuery, genre: genreQuery } },
        ]);
      } else {
        list = await List.aggregate([
          { $sample: { size: 10 } },
          { $match: { type: typeQuery } },
        ]);
      }
    } else {
      list = await List.aggregate([{ $sample: { size: 10 } }]);
    }
    res.status(200).json(list);
  } catch (error) {
    res.status(500).json(error);
  }
};

//ADD TO MY LIST
const addToMyList = async (req, res) => {
  const { id } = req.params;

  try {
    const user = await User.findById(req.user._id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    if (user.myList.includes(id)) {
      return res
        .status(400)
        .json({ message: "Content already exists in user's list" });
    }

    user.myList.push(id);

    await user.save();

    res
      .status(200)
      .json({ message: "Content added to user's list successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export { create, deleteList, get, addToMyList };
