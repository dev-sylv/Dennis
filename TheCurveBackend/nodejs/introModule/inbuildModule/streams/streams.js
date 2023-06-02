// stream are used to handle large amount of data that may not fit into memory. Streams allows data to processed in small chunks which makes them more memory efficient than the traditional I/O operations.

// types of streams in nodejs
// 1. Readable stream: used for reading data.
// 2. Writeable stream: used for writing data.
// 3. duplex stream: used for both reading and writing of data.
// 4. transform stream: used for transforming or modifying data as it is been read.

// - import the "fs" module
// - create an instance of the object extracted from the module.
// - handle data from the readable stream

const fs = require( 'fs' );

// const readStream = fs.createReadStream( "../fs/sample2.txt" );
const readStream = fs.createReadStream( "../fs/Data Science Project Road Map.pdf" );
readStream.on( 'data', (chunk) => {
    console.log("Buffer content:\n", chunk)
    console.log("Actual content:\n", chunk.toString())
} )

readStream.on( 'end', () => {
    console.log("This is the end of the content fetched.")
})

