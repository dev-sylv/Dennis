const fs = require( 'fs' );

const deleteFiles = async () => {
    try {
        await fs.unlinkSync( './mmm.txt' )
        console.log("File deleted")
    } catch ( error ) {
        console.log(error.message)
    }
}

deleteFiles();