## This is just a simple Express Server

### Getting it running

* Your first step is to clone the repo, and then `npm install` the dependencies

* To actually get the server running you will need to type `node index.js` in your terminal

* You should be able to visit `http://localhost:3000` in your browser

### Modifying the example

* The key files in this repo are 
    * `index.js` - If you wanted to connect a database start here
    * `routes.js` - If you wanted to add more routes to your server you can add them here

### Interacting with the robot

To interact with the robot you will need to use something like a browser, curl, or a headless browser like and Amazon Echo to dictate what `URL` to hit.
The pattern will follow like this `curl http://127.0.0.1:3000/api/robots/omnius/commands/on`

### Theory Behind the API

This is a simple server that will interact with configured devices with a firmata protocol already installed. This spins up a server that has an inception style api hidden runninginside of the parent API this is because directly interacting with the Cylon API appears to not behave right.
