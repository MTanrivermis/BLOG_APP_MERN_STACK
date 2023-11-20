"use strict";
/* -------------------------------------------------------
    EXPRESS_JS - BLOG-API Router
------------------------------------------------------- */
const router = require("express").Router();
/* ------------------------------------------------------- */
// routes/users:
const user = require("../controller/userController");
const auth = require("../controller/auth");

// user routes
router.route("/").get(user.list).post(user.create);

router
  .route("/:id")
  .get(user.read)
  .put(user.update)
  .patch(user.update)
  .delete(user.delete);

// auth routes
router.route("/auth/login").post(auth.login);

/* ------------------------------------------------------- */
module.exports = router;