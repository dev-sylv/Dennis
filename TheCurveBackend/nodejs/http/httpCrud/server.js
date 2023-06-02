// import http module
const http = require( 'http' );
// const clubController = require('./clubController/clubController')
const {getAllClub, getOneClub, createNewClub, updateAnExistingClub, deleteAnExistingClub} = require('./clubController/clubController')
// create a port
const host = "localhost://"
const port = 2023;

// create our server instance
const server = http.createServer( ( req, res ) => {
    if ( req.url === "/api/clubs" && req.method === "GET" ) {
        res.writeHead( 200, { "Content-Type": "application/json" } )
        getAllClub( req, res );
    } else if ( req.url.match( /\/api\/clubs\/([0-9]+)/ ) && req.method === "GET" ) {
        res.writeHead( 200, { "Content-Type": "application/json" } )
        const id = req.url.split( '/' )[ 3 ];
        getOneClub( req, res, id );
    } else if ( req.url === "/api/clubs" && req.method === "POST" ) {
        res.writeHead( 201, { "Content-Type": "application/json" } );
        createNewClub( req, res );
    } else if ( req.url.match( /\/api\/clubs\/([0-9]+)/ ) && req.method === "PUT" ) {
        res.writeHead( 200, { "Content-Type": "application/json" } )
        const id = req.url.split( '/' )[ 3 ];
        updateAnExistingClub( req, res, id );
    } else if ( req.url.match( /\/api\/clubs\/([0-9]+)/ ) && req.method === "DELETE" ) {
        res.writeHead( 200, { "Content-Type": "application/json" } )
        const id = req.url.split( '/' )[ 3 ];
        deleteAnExistingClub( req, res, id );
    }
} );


server.listen( port, () => {
    console.log(`Server is listening to host: ${host}${port} `)
} );