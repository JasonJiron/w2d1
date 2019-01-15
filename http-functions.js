var https = require('https');    


function getHTML(options, callback) {

  https.get(options, function(response) {
    // set encoding of received data to UTF-8
    response.setEncoding('utf8');
    // the callback is invoked when a `data` chunk is received
    var html = "";    
    response.on('data', function(chunk) {
      html += chunk
    });
    // the callback is invoked when all of the data has been received
    // (the `end` of the stream)
    response.on('end', function() {
      callback(html)
    });
  });
};


module.exports = getHTML;