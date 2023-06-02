// import the database
const clubDB = require( '../clubDB/clubDB.json' );
const { v4: uuidv4 } = require( 'uuid' )
const fs = require( 'fs' );


// read all clubs in the database
const readAll = () => {
    return new Promise( (resolve, reject) => {
        resolve(clubDB)
    })
}

// read one club in the database
const readOne = (id) => {
    return new Promise( ( resolve, reject ) => {
        const club = clubDB.find( ( item ) => item.id === id );
        resolve( club );
    })
}

// create a new club
const newClub = (newlyCreatedClub) => {
    return new Promise( (resolve, reject) => {
        // create a new club with a auto_generated id
        const newClub = { id: uuidv4(), ...newlyCreatedClub };
        // save the newly created club in the database
        clubDB.push( newClub );
        // write to the existing file (clubDb.json)
        fs.writeFileSync( './clubDB/clubDB.json', JSON.stringify( clubDB ), 'utf8', (error) => {
            if ( error ) {
                console.log( error );
            } else {
                console.log("Club created successfully.")
            }
        } )
        // fs.writeFileSync( '../clubDB/clubDB.json', JSON.stringify( clubDB ), 'utf8' );
        resolve( newClub );
    });
}

// update an existing club model
const updateClub = (id, updatedExistingClub) => {
    return new Promise( ( resolve, reject ) => {
        const clubIndex = clubDB.find( ( item ) => item.id === id )
        console.log(clubIndex)
        clubDB[clubIndex] = { id, ...updatedExistingClub };
        clubDB.push( clubDB[ clubIndex ] );
        fs.writeFileSync( './clubDB/clubDB.json', JSON.stringify( clubDB ), 'utf8', (error) => {
            if ( error ) {
                console.log( error );
            } else {
                console.log("Club updated successfully.")
            }
        } )
        resolve(clubDB[clubIndex]);
    });
}

// model to delete a club
const deleteClub = (id) => {
    return new Promise( ( resolve, reject ) => {
        filteredClub = clubDB.filter( ( item ) => item.id !== id )
        fs.unlinkSync( './clubDB/clubDB.json' );
        fs.writeFileSync( './clubDB/clubDB.json', JSON.stringify( filteredClub ), 'utf8', (error) => {
            if ( error ) {
                console.log( error );
            } else {
                console.log("Club updated successfully.")
            }
        } )

        
        resolve();
    })
}

module.exports = {
    readAll,
    readOne,
    newClub,
    updateClub,
    deleteClub,
}

