// error example

var fs = require('fs'),
    path = require('path');

var Q = require("q");

var file = path.join(__dirname,'doesNotExist.txt');

function readFile(file, encoding) {
  var deferred = Q.defer()

  fs.readFile(file, encoding, function (err, data) {
    if (err) {
      deferred.reject(err);
    } else {
      deferred.resolve(data);
    }
  })

  return deferred.promise;
}

readFile(file, 'utf8')
  .then(console.log, function(err) {
    console.error("ERROR HAS OCCURRED!!!");
    console.error(err);
  });
