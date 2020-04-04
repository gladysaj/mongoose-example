const mongoose = require("mongoose")

const {Schema} = mongoose;
//you can use also
//const Schema = mongoose.Schema

const catSchema = new Schema ({
  name: {
    type: String,
    required: true,
    unique: true, 
  },
  age: {
    type: Number,
    min: 1, 
  },
});

module.exports = mongoose.model("Cat", catSchema);