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

// DELETE method for projects
server.delete('/api/projects/:id', (req, res) => {
    const id = req.params.id;

    // Delete content
    projectDb
    .remove(id)
    .then(response => {
        res.status(200).json(`${response} project was deleted`)
    }).catch(err => {
        res.status(500).json({ Error: err })
    })
})

// PUT method for projects 
server.put('/api/projects/:id', (req, res) => {
    const id = req.params.id;
    const project = req.body;

    projectDb
    .update(id, project)
    .then(response => {
        res.status(200).json({ project })
    })
    .catch(err => {
        res.status(500).json({ Error: err })
    })
})

// CRUD for Actions

// GET method for actions
server.get('/api/actions', (req, res) => {

    actionDb
    .get()
    .then(response => {
        res.status(200).json({ response })
    })
    .catch(err => {
        res.status(500).json({ Error: err })
    })
})

// Link server to localhost
const port = 3000;
server.listen(port, () => console.log(`The server is running on localhost: ${port}`))