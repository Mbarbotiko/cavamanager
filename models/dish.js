const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const dishSchema = new Schema({
  title: { type: String, required: true },
  type: { type: String, required: true },
  description: {type:String,required: true },
  date: { type: Date, default: Date.now }
});

const Dish = mongoose.model("Dish", dishSchema);

module.exports = Dish;
