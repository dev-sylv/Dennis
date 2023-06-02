// read a file using a promise
const fs = require( 'fs' );

function readPromise () {
    return new Promise( ( resolve, reject ) => {
        fs.readFile( './sample.txt', (error, data) => {
            if ( error ) {
                reject(error)
            } else {
                resolve( data )
                console.log(data.toString())
            }
        });
    });
}

// readPromise()

function readFileWithPromise (location) {
    return new Promise( ( resolve, reject ) => {
        fs.readFile(location, (error, data) => {
            if ( error ) {
                reject(error)
            } else {
                resolve( data )
                console.log(data.toString())
            }
        });
    });
}

const location = "./sample3.txt";
readFileWithPromise( location );


// create an append function
const appendFileWithPromise = (path, newContent, encode) => {
    // call a promise
    return new Promise( (resolve, reject) => {
        // read a file
        fs.appendFile( path, newContent, encode, ( err ) => {
            if ( err ) {
                reject(err)
            } else {
                resolve()
            }
        });
    });
}
const path = "./sample3.txt";
const newContent = "new content";
const encode = "utf8";
appendFileWithPromise( path, newContent, encode );

// create a write function
const writeFileWithPromise = (path, newContent, encode) => {
    // call a promise
    return new Promise( (resolve, reject) => {
        // read a file
        fs.writeFile( path, newContent, encode, ( err ) => {
            if ( err ) {
                reject(err)
            } else {
                resolve()
            }
        });
    });
}
const path = "./sample3.txt";
const newContent = "another content";
const encode = "utf8";
appendFileWithPromise( path, newContent, encode );
// writeFileWithPromise( path, newContent, encode );


// delete a file function
function deleteMyFile (path) {
    return new Promise( function ( resolve, reject ) {
        fs.unlink( path, function ( err) {
            if ( err ) {
                reject(err)
            } else {
                resolve()
            }
        });
    })
}

deleteMyFile("/sample3.txt");