// Bring in modules
const express = require('express');
const actionDb = require('./data/helpers/actionModel');
const projectDb = require('./data/helpers/projectModel');
const cors = require('cors');

// Initialize server
const server = express();

// Add middleware
server.use(express.json());
server.use(cors())

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

// GET Actions for a Project
server.get('/api/project/:id', (req, res) => {
    const id = req.params.id;

    projectDb
    .getProjectActions(id)
    .then(response => {
        res.status(200).json({ response })
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

// POST method for actions
server.post('/api/actions', (req, res) => {
    const actions = req.body;

    actionDb
    .insert(actions)
    .then(response => {
        res.status(201).json({ response })
    })
    .catch(err => {
        res.status(500).json({ Error: err })
    })
})

// DELETE method for actions
server.delete('/api/actions/:id', (req, res) => {
    const id = req.params.id;
    let deletedAction;

    // Store action to be deleted
    actionDb
    .get(id)
    .then(action => {
        deletedAction = { ... action }
    })
    
    // Deletes action
    actionDb
    .remove(id)
    .then(response => {
        res.status(200).json({ deletedAction })
    })
    .catch(err => {
        res.status(500).json({ Error: err })
    })

})

// PUT method for actions
server.put('/api/actions/:id', (req, res) => {
    const id = req.params.id;
    const action = req.body;

    actionDb
    .update(id, action)
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