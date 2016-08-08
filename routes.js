/**
 * Created by jeremyrobles on 8/8/16.
 */
var path = require("path");

module.exports = (function() {

    var router = require('express').Router();

    router.get('/', function(req, res){
        res.sendFile(path.join(__dirname+'/markup/index.html'));
    });
    router.get('/test', function(req, res){
        res.sendFile(path.join(__dirname+'/markup/index.html'));
    });
    
    return router;

})();
