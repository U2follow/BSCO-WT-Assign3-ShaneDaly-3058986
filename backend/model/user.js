const mongoose = require("mongoose")      //import mongoose

const UserSchema = new mongoose.Schema(         //creating model schema
  {
    username: {
      type: String,
      require: true,
      unique: true,
    },
    email: {
      type: String,
      require: true,
      unique: true,
    },
    password: {
      type: String,
      require: true,
    },
    profilePic: {
      type: String,
      default: "",
    },
  },
  { timestamps: true }
)
module.exports = mongoose.model("User", UserSchema)       //export the schema model of users
