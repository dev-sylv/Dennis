const express = require( "express" );
const fs = require( "fs" );

const port = 5000


const app = express();
app.use( express.json() );

// read contents from the json file
const readContent = () => {
    const data = fs.readFileSync( './record.json' );
    return JSON.parse( data );
}

// write content to the json file
const writeContent = (data) => {
    fs.writeFileSync( './record.json', JSON.stringify(data, null, 2) );
}

// express CRUD operations
// Get all records from the database
app.get( '/records', (req, res) => {
    const database = readContent()
    res.status( 200 ).json( {
        status: "ok",
        data: database.records
    } );
} )

// Get a particular record from the database
app.get( '/records/:id', ( req, res ) => {
    const database = readContent();
    const recordId = parseInt( req.params.id )
    const record = database.records.find( ( r ) => ( r.id === recordId ) );
    if ( record ) {
        res.status( 200 ).json( {
            status: "ok",
            data: record
        } )
    } else {
        res.status(404).json(`Record with id: ${recordId} is not found.`)
    }
} )

// Create new record
app.post( '/records', ( req, res ) => {
    const database = readContent();
    const newRecord = req.body;
    newRecord.id = database.records.length + 1;
    database.records.push( newRecord );
    writeContent( database );
    res.status( 200 ).json( {
        status: "ok",
        data: newRecord
    } );
} )

// update an existing record
app.put( '/records/:id', (req, res) => {
    const database = readContent();
    const recordId = parseInt(req.params.id);
    const updatedRecord = req.body;
    const index = database.records.findIndex( ( r ) => ( r.id === recordId ) )
    if ( index !== -1 ) {
        database.records[ index ] = { ...database.records[ index ], ...updatedRecord }
        writeContent( database );
        res.status(200).json(database.records[index])
    } else {
        res.status(404).json({ message: `Record with index: ${index} not found` })
    }
})

// delete an existing record
app.delete( '/records/:id', (req, res) => {
    const database = readContent();
    recordId = parseInt( req.params.id );
    const index = database.records.findIndex( ( r ) => ( r.id === recordId ) )
    if ( !database.records[0] ) {
        const deletedRecord = database.records[ index ]
        database.records.splice( index, 1 );
        writeContent( database );
        res.status( 200 ).json( {
            message: "Deleted successfully.",
            data: deletedRecord
        })
    } else {
        res.status(404).json({ message: `Record with id: ${index} is not found` })
    }
})

app.listen( port, () => {
    console.log("server is listening to port " + port)
})