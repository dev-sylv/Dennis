// importing the filesystem module
const fs = require( 'fs' );

// reading from a file synchronously
// const readFile = fileSystem.readFileSync( '../sampleText/sample1.txt', "utf8" );
const readFile = fs.readFileSync( './Data Science Project Road Map.pdf', "utf8" );
console.log( readFile.toString() )
