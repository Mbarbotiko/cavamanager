const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/cavalogs"
);

const dishSeed = [
  {
    title: "Shrimp Cocktail",
    type: "Appetizer",
    description:
      "Yummy strimp cocktail appetizer to share.",
    date: new Date(Date.now())
  }
];

db.Dish
  .remove({})
  .then(() => db.Dish.collection.insertMany(dishSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
