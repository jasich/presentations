// denodeify example

var fs = require('fs'),
    path = require('path');

var Q = require("q");


var readFile = Q.denodeify(fs.readFile);

var promise = readFile(path.join(__dirname,'veryModel.txt'), 'utf8');
promise.then(console.log, console.error);
