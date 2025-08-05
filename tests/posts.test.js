const request = require('supertest');
const express = require('express');
const mongoose = require('mongoose');
const Post = require('../models/post');
const postsRoutes = require('../routes/postsRoutes');

const app = express();
app.use(express.json());
app.use('/posts', postsRoutes);

beforeAll(async () => {
  await mongoose.connect(process.env.MONGODB_URI_TEST || 'mongodb://localhost:27017/test-db');
});

afterAll(async () => {
  await mongoose.connection.dropDatabase();
  await mongoose.connection.close();
});

describe('Posts API', () => {
  let postId;

  test('should create a new post', async () => {
    const res = await request(app)
      .post('/posts')
      .set('x-user-type', 'teacher')
      .send({
        title: 'Test Post',
        content: 'This is a test',
        author: 'Test Author'
      });

    expect(res.statusCode).toBe(201);
    expect(res.body.title).toBe('Test Post');
    postId = res.body._id;
  });

  test('should update a post', async () => {
    const res = await request(app)
      .put(`/posts/${postId}`)
      .set('x-user-type', 'teacher')
      .send({ content: 'Updated content' });

    expect(res.statusCode).toBe(200);
    expect(res.body.content).toBe('Updated content');
  });

  test('should delete a post', async () => {
    const res = await request(app)
      .delete(`/posts/${postId}`)
      .set('x-user-type', 'teacher');

    expect(res.statusCode).toBe(200);
    expect(res.body.message).toBe('Post deleted successfully');
  });
});
