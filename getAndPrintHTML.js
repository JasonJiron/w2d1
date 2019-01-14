var https = require('https');                               


function getAndPrintHTML() {

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step2.html'
  };

  /* Add your code here */
  https.get(requestOptions, function(response) {

    // set encoding of received data to UTF-8
    response.setEncoding('utf8');
  
    // the callback is invoked when a `data` chunk is received
    var body = "";    
    response.on('data', function(chunk) {
      body += chunk
      // console.log(body + '\n');
    });
  
    // the callback is invoked when all of the data has been received
    // (the `end` of the stream)
    response.on('end', function() {
      console.log('Response stream complete.', body);
    });
  });
   
}

getAndPrintHTML()