const express = require("express");
const router = express.Router();
const postController = require("../controllers/postController");

//rutas disponibles para los posts

router.get("/", postController.getAllPosts);
router.post("/", postController.createNewPost);
router.put("/like/:id", postController.likePostById);
router.delete("/:id", postController.deletePostById);

module.exports = router;