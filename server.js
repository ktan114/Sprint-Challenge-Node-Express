// Bring in express module
const express = require('express');

// Initialize server
const server = express();

// Add middleware
server.use(express.json());

// Link server to localhost

const port = 3000;
server.listen(port, () => {`The port is running on localhost: ${port}`})