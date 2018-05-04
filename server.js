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

// CRUD for Projects

// GET method for projects
server.get('/api/projects', (req, res) => {

    projectDb
    .get()
    .then(response => {
        res.status(200).json({ response })
    })
    .catch(err => {
        res.status(500).json({ Error: err })
    })
})

// POST method for projects
server.post('/api/projects', (req, res) => {
    const newProject = req.body;

    projectDb
    .insert(newProject)
    .then(response => {
        res.status(201).json({ response })
    })
    .catch(err => {
        res.status(500).json({ Error: err })
    })
})

// CRUD for Actions

// Link server to localhost
const port = 3000;
server.listen(port, () => console.log(`The server is running on localhost: ${port}`))