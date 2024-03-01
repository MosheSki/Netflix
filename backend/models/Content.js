import mongoose from "mongoose";

const contentSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, unique: true },
    description: { type: String },
    img: { type: String },
    imgTitle: { type: String },
    imgThumb: { type: String },
    imgVertical: { type: String },
    trailer: { type: String },
    movie: { type: String },
    duration: { type: String },
    year: { type: String },
    limit: { type: String },
    genre: { type: String },
    isSeries: { type: Boolean, default: false },
  },
  { timestamps: true }
);

const Content = mongoose.model("Content", contentSchema);

export default Content;
