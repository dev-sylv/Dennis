const fs = require( 'fs' );

const writeFiles = async () => {
    try {
        await fs.writeFile( "mmm.txt", "we are learning", () => {
            console.log("successful writing")
        })
    } catch ( e ) {
        // console.log(e)
        console.log(e, "something went wrong")
    }
}
writeFiles()