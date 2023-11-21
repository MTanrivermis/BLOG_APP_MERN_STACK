const router = require("express").Router();
//users
router.use("/users", require("./userRoute"));

//categories
router.use("/api", require("./blogComLikeCat"));



module.exports = router;