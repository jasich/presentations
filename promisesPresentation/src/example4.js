// promise chaining example

var fs = require('fs'),
    path = require('path');

var Q = require("q");

var file = path.join(__dirname,'veryModel.txt');

function readFile(file, encoding) {
  var deferred = Q.defer()

  fs.readFile(file, encoding, function (err, data) {
    if (err) {
      deferred.reject(err);
    } else {
      deferred.resolve(data);
    }
  })

  return deferred.promise
}

function addSponsorship(fileData) {
  return "The following is brought to you by Pepsi:\n\n\n" + fileData;
}

function addFooter(fileData){
  return fileData + "\n\n*** A Jason Sich Production ***";
}

readFile(file, 'utf8')
  .then(addSponsorship)
  .then(addFooter)
  .then(console.log)
  .catch(function(err) {
    console.error("ERROR HAS OCCURRED!!!");
    console.error(err);
  });

// Async.js example
// async.waterfall([
//     function(cb) {
//       fs.readFile("me.txt", "utf-8", cb);
//     }, function(data, cb) {
//       var x = addSponsorship(data);
//       cb(null, x);
//     }, function(data, cb) {
//       var x = addFooter(data);
//       cb(null, x);
//     }
// ],function(err, data) {
//   if (err) {
//     throw err;
//   }
//   console.log(data);
// });
