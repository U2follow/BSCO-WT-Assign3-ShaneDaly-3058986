const mongoose = require("mongoose");       //import mongoose

const PostSchema = new mongoose.Schema(     //creating model schema
  {
    title: {
      type: String,
      require: true,
      unique: true,
    },
    desc: {
      type: String,
      require: true,
    },
    photo: {
      type: String,
      require: false,
    },
    username: {
      type: String,
      require: true,
    },
    categories: {
      type: Array,
      require: false,
    },
    imgTitle: {
      type: String,
      required: false,
    },
  },
  { timestamps: true }
);
module.exports = mongoose.model("Post", PostSchema);    //export the schema model of posts
