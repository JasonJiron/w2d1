var request = require('request');
var fs = require('fs');


request.get('https://sytantris.github.io/http-examples/future.jpg')
  .on('error', function(err) {
    throw err
  })
  .on('data', function(res) {
    console.log('Downloading image...');
  })
  .on('resonse', function(res) {
    console.log('Download complete.');
  })
  .pipe(fs.createWriteStream('./future.jpg'))
 