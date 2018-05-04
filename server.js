// Bring in modules
const express = require('express');
const actionDb = require('./data/helpers/actionModel');
const projectDb = require('./data/helpers/projectModel');

// Initialize server
const server = express();

// Add middleware
server.use(express.json());

// GET method for initial page
server.get('/', (req, res) => {
    res.send('Welcome to my server');
})

// Link server to localhost
const port = 3000;
server.listen(port, () => console.log(`The server is running on localhost: ${port}`))