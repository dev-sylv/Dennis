// import the http module
const http = require( 'http' );
// create a connector port
const PORT = 1000;

// Create a server instance
const server = http.createServer( (req, res) => {
    res.writeHead( 200, { "Content-Type": "text/plain" } );
    res.end("New content");
});

// connect to the port
server.listen( PORT, () => {
    console.log(`my server is listening to port: ${PORT}`);
});