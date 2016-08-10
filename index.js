var express = require('express');
var routes = require('./routes');
var cylon = require('cylon');
var app = express();

cylon.api({
	host: '127.0.0.1',
	post: '4040',
	ssl: false,
	auth:false
});

var robot = cylon.robot({
	name: 'omnius',
	connections: {
		arduino: {adaptor: 'firmata', port: '/dev/cu.usbmodem1421'}
	},
	work: function (){
	
	},
	commands: function(){
		return {
			on: this.On,
			off: this.Off
		}
	}, 
	On: function(){
		robot.connections.arduino.pinMode(13, 'OUTPUT');
		robot.connections.arduino.digitalWrite(13, 1);
		console.log('turning the light on');
	},
	Off: function(){
		robot.connections.arduino.pinMode(13, 'OUTPUT');
		robot.connections.arduino.digitalWrite(13, 0);
		console.log('turning the light off');
	}
});
robot.start();



app.use('/', routes);

app.listen(3000);
console.log('Serving over port 3000');
