import Content from "../models/Content.js";

//CREATE
const create = async (req, res) => {
  if (req.user.isAdmin) {
    const newContent = new Content(req.body);

    try {
      const savedContent = await newContent.save();
      res.status(201).json(savedContent);
    } catch (error) {
      res.status(500).json(error);
    }
  } else {
    res.status(403).json("You are Not allowed!");
  }
};

//UPDATE
const update = async (req, res) => {
  if (req.user.isAdmin) {
    try {
      const updatedContent = await Content.findByIdAndUpdate(
        req.params.id,
        { $set: req.body },
        { new: true }
      );
      res.status(200).json(updatedContent);
    } catch (error) {
      res.status(500).json(error);
    }
  } else {
    res.status(403).json("You are Not allowed!");
  }
};

//DELETE
const deleteContent = async (req, res) => {
  if (req.user.isAdmin) {
    try {
      await Content.findByIdAndDelete(req.params.id);
      res.status(200).json("The Content has been Deleted");
    } catch (error) {
      res.status(500).json(error);
    }
  } else {
    res.status(403).json("You are Not allowed!");
  }
};

//GET
const get = async (req, res) => {
  try {
    const content = await Content.findById(req.params.id);
    res.status(200).json(content);
  } catch (error) {
    res.status(500).json(error);
  }
};

//GET RANDOM
const getRandom = async (req, res) => {
  const type = req.query.type;
  let content;
  try {
    if (type === "series") {
      content = await Content.aggregate([
        { $match: { isSeries: true } },
        { $sample: { size: 1 } },
      ]);
    } else {
      content = await Content.aggregate([
        { $match: { isSeries: false } },
        { $sample: { size: 1 } },
      ]);
    }
    res.status(200).json(content);
  } catch (error) {
    res.status(500).json(error);
  }
};

//GET ALL
const getAll = async (req, res) => {
  if (req.user.isAdmin) {
    try {
      const contents = await Content.find();
      res.status(200).json(contents.reverse());
    } catch (error) {
      res.status(500).json(error);
    }
  } else {
    res.status(403).json("You are Not allowed!");
  }
};

export { create, update, deleteContent, get, getRandom, getAll };
