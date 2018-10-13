const router = require("express").Router();
const dishController = require("../../controllers/dishController");


router.route("/")
  .get(dishController.findAll)
  .post(dishController.create);


router
  .route("/:id")
  .get(dishController.findById)
  .put(dishController.update)
  .delete(dishController.remove);

module.exports = router;
