const fs = require( 'fs' );

const updateFiles = async () => {
    try {
        await fs.appendFileSync( './sample.txt', '\nnew content1' );
        await fs.appendFileSync( './mmm.txt', '\nnew content1' );
        console.log('successfully updated')
    } catch ( e ) {
        console.log(e.message)
    }
}

updateFiles()