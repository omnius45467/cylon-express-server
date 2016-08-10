/**
 * Created by jeremyrobles on 8/8/16.
 */
var path = require("path");
var http = require("http");
var curl = require("curlrequest");

module.exports = (function() {

    var router = require('express').Router();

    router.get('/on', function(req, res){
	res.sendStatus(200);
	curl.request('http://localhost:4040/api/robots/omnius/commands/on', function(err){
		console.log(err);
	});
    });
    router.get('/test', function(req, res){
	res.sendStatus(200);
	curl.request('http://localhost:4040/api/robots/omnius/commands/off', function(err){
		console.log(err);
	});
    });
    
    return router;

})();
