// importing the express package from your dependencies
const express = require('express')

// creating a new instance of the express app, your website
const app = express()

// defining the port number the server will be listening on
const port = 3001

// activating the server on this port and checking for errors
app.listen(port, (err) => {
    if(err) {
        // unsuccessful listen
        console.log("There was an error!" + err)
    } else {
        // successful listen
        console.log("Server is listening on port " + port)
    }
})

// defining the "home" route with a /
app.route('/')
    // initiating a GET request handler with parameters "request" and "response" inside of a function
    .get((req, res) => {
        // Sending the text to be displayed on the home route of the server
        res.send("Hello wold")
    })