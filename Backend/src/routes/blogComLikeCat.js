"use strict";
/* -------------------------------------------------------
    EXPRESS_JS - BLOG-API Router
------------------------------------------------------- */
const router = require("express").Router();
/* ------------------------------------------------------- */
// routes/users:

const category = require("../controllers/categoryController")
const blog = require("../controllers/blogController")
const like = require("../controllers/likeController")
const comment = require("../controllers/commentController")



// category routes
router.route("/categories")
    .get(category.list).post(category.create);

router
    .route("/categories/:id")
    .get(category.read)
    .put(category.update)
    .patch(category.update)
    .delete(category.delete);


// comment routes
router.route("/comments/:id")
    .post(comment.create)
    .put(comment.update)
    .delete(comment.delete);

// blog  routes
router.route("/blogs")
    .get(blog.list).post(blog.create);

router
    .route("/blogs/:id")
    .get(blog.read)
    .put(blog.update)
    .patch(blog.update)
    .delete(blog.delete);

// likes  routes
router.route("/likes/:id").post(like.create)





/* ------------------------------------------------------- */
module.exports = router;
