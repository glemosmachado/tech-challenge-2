const express = require('express');
const router = express.Router();
const Post = require('../models/post');
const checkTeacher = require('../middlewares/checkTeacher');

router.get('/search', async (req, res) => {
  try {
    const { query } = req.query;

    if (!query) {
      return res.status(400).json({ message: 'Search query is required' });
    }

    const posts = await Post.find({
      $or: [
        { title: { $regex: query, $options: 'i' } },
        { content: { $regex: query, $options: 'i' } } 
      ]
    });

    res.json(posts);
  } catch (err) {
    console.error('Search error:', err); 
    res.status(500).json({ message: 'Error retrieving post', error: err.message });
  }
});

router.get('/', async (req, res) => {
  try {
    const posts = await Post.find();
    res.json(posts);
  } catch (err) {
    res.status(500).json({ message: 'Failed to list posts' });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post) {
      return res.status(404).json({ message: 'Post not found' });
    }
    res.json(post);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving post' });
  }
});

router.post('/', checkTeacher, async (req, res) => {
  const { title, content, author } = req.body;
  const newPost = new Post({ title, content, author });
  await newPost.save();
  res.status(201).json(newPost);
});

router.put('/:id', checkTeacher, async (req, res) => {
  const updatedPost = await Post.findByIdAndUpdate(req.params.id, req.body, { new: true });
  if (!updatedPost) return res.status(404).json({ error: 'Post not found' });
  res.json(updatedPost);
});

router.delete('/:id', checkTeacher, async (req, res) => {
  const deletedPost = await Post.findByIdAndDelete(req.params.id);
  if (!deletedPost) return res.status(404).json({ error: 'Post not found' });
  res.json({ message: 'Post deleted successfully' });
});

module.exports = router;