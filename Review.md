# Review Questions

## What is Node.js?

Node.js is a way for JavaScript to be used/displayed on the server side.

## What is Express?

Express is a middleware that is used to process HTTP request between a client and server.

## Mention two parts of Express that you learned about this week.

Express has built in middleware, such as express.json() which is a built in body parser. Using Express allows for routing for all HTTP requests, creating different modules.

## What is Middleware?

Middleware is seen as an extension, giving more functionality to the operating system. 

## What is a Resource?

A resource refers to a noun, in a REstful application, and also the target of an endpoint. 

## What can the API return to help clients know if a request was successful?

An API can return a status code to let the clients know if the request was successful (typically status code 200-299).

## How can we partition our application into sub-applications?

We can partition our applications into sub-applications using routing, the built in middleware in Express that offers this functionality is express.Router().

## What is CORS and why do we need it?

CORS stands for Cross Origin Resource Sharing and it provides a way for a server to request for information from another server. Browsers typically restricts cross-origin HTTP request and with CORS it'll allow for secure request and data transfer between the browser and servers.