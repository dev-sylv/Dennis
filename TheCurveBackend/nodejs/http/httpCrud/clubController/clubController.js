// import the model
// const clubModel = require( "../clubModel/clubModel" );
const {readAll, readOne, newClub, updateClub, deleteClub} = require( "../clubModel/clubModel" );


// business logic to get all clubs
const getAllClub = async (req, res) => {
    try {
        // const clubs = await clubModel.readAll();
        const clubs = await readAll();
        if ( clubs.length === 0 ) {
            res.writeHead( 200, { 'Content-Type': 'application/json' } )
        res.end("There is no registered club.");
        } else {
            res.writeHead( 200, { 'Content-Type': 'application/json' } )
            res.end( `List of EPL clubs: \n ${ JSON.stringify( clubs ) } \n Total number of clubs: ${ clubs.length }` );
        }
       
    } catch ( e ) {
        res.writeHead( 404, { 'Content-Type': 'application/json' } )
        res.end(e.message);
    }
}

// getting a club
const getOneClub = async ( req, res, id ) => {
    try {
        // const club = await clubModel.readOne(id)
        const club = await readOne( id );
        console.log(club)
        if ( !club) {
            res.writeHead( 404, { 'Content-Type': 'application/json' } )
            res.end( `Club with id: ${id} does not exist.`)
        } else {
            res.writeHead( 200, { 'Content-Type': 'application/json' } )
            res.end( JSON.stringify( club ) );
        }
    } catch ( e ) {
        res.end(e.message)
    }
}

// business logic to create new club
const createNewClub = async (req, res) => {
    try {
        let body = ''
        req.on( 'data', (chunk) => {
            body += chunk.toString();
        } )
        req.on( 'end', async () => {
            const { competition, clubName, manager, teamNumber, jerseyColor, stadium, nickname } = JSON.parse( body );
            
            const newData = {
                competition,
                clubName,
                manager,
                teamNumber,
                jerseyColor,
                stadium,
                nickname,
            }

            const oneNewClub = await newClub( newData );
            if ( !oneNewClub ) {
                res.writeHead( 400, { "Content-Type": "application/json" } )
                res.end("Error trying to new club.")
            } else {
                res.writeHead( 201, { "Content-Type": "application/json" } )
                res.end(JSON.stringify(oneNewClub))
            }
        })
    } catch ( e ) {
        res.writeHead( 400, { 'Content-Type': 'application/json' } );
        res.end(e.message)
    }
}

// update a club
const updateAnExistingClub = async ( req, res, id ) => {
    try {
        const club = await readOne( id );
        console.log( club )
        if ( !club ) {
            res.writeHead( 400, { 'Content-Type': 'application/json' } )
            res.end( `Club with id: ${ id } does not exist.` )
        } else {
            let body = ''
            req.on( 'data', ( chunk ) => {
                body += chunk.toString();
            } )
            req.on( 'end', async () => {
                const { competition, clubName, manager, teamNumber, jerseyColor, stadium, nickname } = JSON.parse( body );
            
                const newData = {
                    competition: competition || club.competition,
                    clubName: clubName || club.clubName,
                    manager: manager || club.manager,
                    teamNumber: teamNumber || club.teamNumber,
                    jerseyColor: jerseyColor || club.jerseyColor,
                    stadium: stadium || club.stadium,
                    nickname: nickname || club.nickname
                }

                const updatedClub = await updateClub(id, newData );
                if ( !updatedClub ) {
                    res.writeHead( 400, { "Content-Type": "application/json" } )
                    res.end( "Error trying to update club." )
                } else {
                    res.writeHead( 201, { "Content-Type": "application/json" } )
                    res.end( JSON.stringify( updatedClub ) )
                }
            } )
        }
    } catch ( e ) {
            res.writeHead( 400, { 'Content-Type': 'application/json' } );
            res.end( e.message )
        }
}
    
// business logic to delete a club
const deleteAnExistingClub = async (req, res, id) => {
    try {
        const club = await readOne( id );
        console.log( club )
        if ( !club ) {
            res.writeHead( 404, { 'Content-Type': 'application/json' } )
            console.log(`${id}`)
            res.end( `Club with id: ${ id } does not exist.` )
        } else {
            await deleteClub( club )
            res.writeHead( 200, { 'Content-Type': 'application/json' } )
            res.end( 'deleted' )
        }
    } catch ( e ) {
        res.writeHead( 500, { 'Content-Type': 'application/json' } );
        res.end( e.message )
    }
}

module.exports = {
    getAllClub,
    getOneClub,
    createNewClub,
    updateAnExistingClub,
    deleteAnExistingClub
}


// dfbd0b3f-18ea-437f-a4f2-9099879dbd2e