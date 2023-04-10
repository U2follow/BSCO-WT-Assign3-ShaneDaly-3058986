const mongoose = require("mongoose")            //import mongoose

const CategorySchema = new mongoose.Schema({        //creating model schema
  name: {
    type: String,
    require: true,
  },
})
module.exports = mongoose.model("Category", CategorySchema)    //export the schema model of category
