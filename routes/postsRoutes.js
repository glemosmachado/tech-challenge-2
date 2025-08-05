const express = require('express');
const router = express.Router();
const postController = require('../controllers/postsController');

router.post('/', postController.createPost);
router.get('/author/:author', postController.getPostsByAuthor);
router.get('/:id', postController.getPostById);
router.get('/', postController.getPosts);
router.put('/:id', postController.updatePost);
router.delete('/:id', postController.deletePost);

module.exports = router;