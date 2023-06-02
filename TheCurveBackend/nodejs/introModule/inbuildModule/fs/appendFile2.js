const fs = require( 'fs' );

// appending a file asynchronously
fs.appendFile( "./sample2.txt", "\n4. Precious", (error) => {
    if ( error ) {
        console.log("Unable to append to this file")
    } else {
        console.log("successful")
    }
});