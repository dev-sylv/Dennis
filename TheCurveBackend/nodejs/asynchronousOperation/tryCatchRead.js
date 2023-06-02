// import the fs module
const fs = require( 'fs' );

// using the try and catch to read from a file
const readFiles1 = async () => {
    try {
        await fs.readFile( './sample.txt', 'utf-8', (e, d) => {
            // console.log(d.toString())
            console.log(d)
        } );
    } catch ( e ) {
        console.log(e)
    }
}
readFiles1();

const readFile2 = async () => {
    try {
        const data = await fs.readFileSync( './sample.txt' );
        console.log(data)
    } catch ( e ) {
        console.log(e.message)
    }
}

readFile2()