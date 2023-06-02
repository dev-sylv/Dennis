// import the http module
const http = require( 'http' );
// import the file system module
const fs = require( 'fs' );
// create a connection port for the server
const PORT = 1818;

// create a server with the http instance
const app = http.createServer( ( req, res ) => {
    // using switch to route on different endpoints
    switch (req.url) {
        case '/boy': //first endpoint
            fs.readFile( './allPages/boy.html', ( error, data ) => {
                if ( error ) {
                    alert( "Error trying to render page." )
                } else {
                    res.end( data )
                }
            } )
            break;
        case '/girl': //second endpoint
            fs.readFile( './allPages/girl.html', ( error, data ) => {
                if ( error ) {
                    alert( "Error trying to render page." )
                } else {
                    res.end( data )
                }
            } )
            break;
        case '/man': //third endpoint
            fs.readFile( './allPages/man.html', ( error, data ) => {
                if ( error ) {
                    alert( "Error trying to render page." )
                } else {
                    res.end( data )
                }
            } )
            break;
        case '/woman': //forth endpoint
            fs.readFile( './allPages/woman.html', ( error, data ) => {
                if ( error ) {
                    alert( "Error trying to render page." )
                } else {
                    res.end( data )
                }
            } )
            break;
        default: //fall back endpoint
            fs.readFile( './allPages/welcome.html', ( error, data ) => {
                if ( error ) {
                    alert( "Error trying to render page." )
                } else {
                    res.end( data )
                }
            } )
        
    }
} )

// connect the server to the port
app.listen( PORT, () => {
    console.log(`Server is listening on port: ${PORT}`)
})