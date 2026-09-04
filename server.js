/* Simple Node.js and Express application server for serving static assets.*/

const express = require('express');
const path = require('path');
const port = process.env.PORT || 8080;
const app = express();

// Middleware to serve static files from the 'dist' directory
// This directory should contain the built assets of your application
// Ensure that the 'dist' directory exists and contains your static files.
// You can have subdirectories in 'dist' for better organization.
// For example, you might have 'dist/css', 'dist/js', etc.
// The static files will be served at the root URL (e.g., http://localhost:8080/)
app.use(express.static(__dirname + '/dist'));

// serve index.html for the root path
app.get("/", function (request, response) {
  response.sendFile(path.resolve(__dirname, 'index.html'));
});

// example route to demonstrate server functionality
// this can be accessed at http://localhost:8080/hello
// and will respond with "Hello World, from the server!"
app.get("/hello", function (request, response) {
    response.send("Hello World, from the server!");
});

app.listen(port);
console.log("server started on port " + port);