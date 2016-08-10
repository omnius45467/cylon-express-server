var express = require('express');
var cylon = require('cylon');
var path = require("path");
var http = require("http");
var curl = require("curlrequest");
var app = express();

cylon.api({
    host: '127.0.0.1',
    post: '4040',
    ssl: false,
    auth: false
});

var robot = cylon.robot({
    name: 'omnius',
    connections: {
        arduino: {adaptor: 'firmata', port: '/dev/cu.usbmodem1421'}
    },
    work: function () {

    },
    commands: function () {
        return {
            on: this.On,
            off: this.Off
        }
    },
    On: function () {
        robot.connections.arduino.pinMode(13, 'OUTPUT');
        robot.connections.arduino.digitalWrite(13, 1);
        console.log('turning the light on');
    },
    Off: function () {
        robot.connections.arduino.pinMode(13, 'OUTPUT');
        robot.connections.arduino.digitalWrite(13, 0);
        console.log('turning the light off');
    }
});
robot.start();

app.get('/api/robots/omnius/commands/on', function (req, res) {
    res.sendStatus(200);
    curl.request('http://localhost:4040/api/robots/omnius/commands/on', function (err) {
        // console.log(err);
    });
});
app.get('/api/robots/omnius/commands/off', function (req, res) {
    res.sendStatus(200);
    curl.request('http://localhost:4040/api/robots/omnius/commands/off', function (err) {
        // console.log(err);
    });
});

app.listen(3000);
console.log('Serving over port 3000');
