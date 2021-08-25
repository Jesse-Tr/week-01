let myhttp = require("http");

let myserver = myhttp.createServer( 

  function( myrequest , myresponse ){
    console.log(myrequest.url);

    myresponse.writeHead(200, { "content-type": "text/plain" });
    myresponse.end( " Hello World\n");
  }
 );
myserver.listen(8080,"0.0.0.0");

console.log("server has started");