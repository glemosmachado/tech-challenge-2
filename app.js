const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const postsRoutes = require('./routes/postsRoutes');

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Connection to MongoDB
mongoose.connect(process.env.MONGODB_URI)
    .then(() => console.log('Connection to MongoDB is UP'))
    .catch((err) => console.error('MongoDB error', err));

// Routes
app.use('/posts', postsRoutes);

// Base Route
app.get('/', (req, res) => {
    res.send('API is live');
});

// Server On
app.listen(port, () => {
    console.log(`Server running on port: ${port}`);
});