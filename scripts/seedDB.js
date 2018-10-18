const mongoose = require("mongoose");
const db = require("../models");


mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/cavalogs"
);

const dishSeed = [
  {
    title: "Tenderloin Medallions",
    type: "Entree",
    description:
      "Potato gnocchi, zucchini noodles, fresno chilies, parmesan, bacon and sherry brown butter",
    date: new Date(Date.now())
  },
  {
    title: "Asparagus Puff",
    type: "Appetizer",
    description:
      "Garlic sauteed asparagus wrapped in a crispy pastry puff",
    date: new Date(Date.now())
  },
  
  {
    title: "Wellington",
    type: "Entree",
    description:
      "House cut Certified Angus Beef medallions topped with bearnaise sauce, served with house seasoned french fries & grilled asparagus",
    date: new Date(Date.now())
  },

  {
    title: "Bamboo Bite",
    type: "Entree",
    description:
      "Crunchy tempura shrimp, cream cheese topped with avocado, jalapeño, with hibachi & unagi sauces",
    date: new Date(Date.now())
  },
  {
    title: "Sea Scallop",
    type: "Entree",
    description:
      "Baked scallops, snow crab, avocado, cucumber, spicy sweet sauce",
      date: new Date(Date.now())
  },
  {
    title: "Buffalo Wontons",
    type: "Appetizer",
    description:
      "Stuffed with buffalo glazed chicken, cream cheese and herbs. Served with amablu coleslaw, celery and ranch",
      date: new Date(Date.now())
  },
  {
    title: "Steak and Fries",
    type: "Entree",
    description:
      "Grilled denver cut steak, house made fries, aioli, grilled peppers and avocado chimmichurri salad",
      date: new Date(Date.now())
  },
  

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
