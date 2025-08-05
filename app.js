const express = require('express')
const app = express()
const port = 3000
require('dotenv').config();
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('Connection to MongoDB'))
.catch((err) => console.error('MongoDB error', err));

app.get('/', (req, res) =>{
    res.send('Test')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})