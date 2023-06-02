const fs = require( 'fs' );

// using asynchronous operations
fs.readFile( './sample2.txt', "utf8", ( error, data ) => {
    if ( error ) {
        console.log("Unable to read file")
    } else {
        console.log( data );
    }
} )