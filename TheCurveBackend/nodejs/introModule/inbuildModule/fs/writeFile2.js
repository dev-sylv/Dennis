const fs = require( 'fs' );

// writing to a file asynchronously
fs.writeFile( './sample2.txt', "3. Ebuka", (error) => {
    if ( error ) {
        console.log("Unable to write to the file.")
    } else {
        console.log("Successfully written to the file")
    }
} );