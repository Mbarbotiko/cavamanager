const router = require("express").Router();
const dishRoutes = require("./dishes");


router.use("/dishes", dishRoutes);

module.exports = router;
