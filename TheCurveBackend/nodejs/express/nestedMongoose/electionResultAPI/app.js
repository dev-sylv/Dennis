const express = require( 'express' );
const mongoose = require( 'mongoose' );
const PORT = 2023;

const url = 'mongodb://127.0.0.1:27017/resultDB';
mongoose.connect( url ).then( () => {
    console.log(`Database connection was established.`)
}).catch( ( error ) => {
    console.log( `Error connecting to ${url}` );
} );

const electionSchema = new mongoose.Schema( {
    state: {
        type: String
    },
    parties:     {
            type: String
        }
    ,
    result: {
        type: Number
    },
    collationOfficer: {
        type: String
    },
    isRigged: {
        type: Boolean,
        default: false
    },
    totalLg: {
        type: Number
    }
} )

const electionModel = mongoose.model( 'electionresult', electionSchema );

const app = express();
app.use( express() );
app.use( express.json() );

// Get winner:
app.get("/getwinner", async(req, res) =>{

    const {parties} = req.body
    const checkRig = await electionModel.findOne({parties})

    const getName = (await electionModel.find()).filter((el) => el.parties === parties).map((el) => el.parties)[0];
    const allresults = (await electionModel.find()).filter((el) => el.parties === parties).map((el) => el.result).reduce((a, b) => a + b);
    res.status(200).json({
        message: `The Total Result for ${getName}`,
        Rigged: checkRig.isRigged,
        result: allresults,
    })
})

app.post( "/results", async ( req, res ) => {
    const data = req.body;
    const result = await electionModel.create( data );
    if ( !result ) {
        res.status(400).json({
            Error: "Unable to create election result."
        })
    } else {
        res.status( 201 ).json( {
            message: "Created successfully.",
            data: result
        })
    }
} );

app.get( '/results', async ( req, res ) => {
    const results = await electionModel.find( {} );
    if ( results === null ) {
        res.status( 404 ).json( {
            Error: "No results for this election."
        })
    } else {
        res.status( 200 ).json( {
            message: "Results",
            data: results
        })
    }
} )

app.get( '/results/:stateId', async ( req, res ) => {
    const stateId = req.params.stateId;
    const result = await electionModel.findById(stateId);
    if ( !result ) {
        res.status( 404 ).json( {
            Error: "No result found for this state."
        })
    } else {
        res.status( 200 ).json( {
            message: "Results",
            data: result
        })
    }
} )

app.put( '/results/:stateId', async ( req, res ) => {
    const stateId = req.params.stateId;
    const {result} = req.body;
    const updatedResult = await electionModel.findByIdAndUpdate( stateId, {result, isRigged: true}, { new: true } );
    if ( !updatedResult ) {
        res.status( 400 ).json( {
            Error: `Unable to update election result for ${data.state}`
        })
    } else {
        res.status( 200 ).json( {
            message: "Successfully updated.",
            data: updatedResult
        })
    }
} )

app.delete( '/results/:stateId', async ( req, res ) => {
    const stateId = req.params.stateId;
    const data = req.body;
    const updatedResult = await electionModel.findByIdAndDelete( stateId, data, { new: true } );
    if ( !updatedResult ) {
        res.status( 400 ).json( {
            Error: `Unable to delete election result for ${data.state}`
        })
    } else {
        res.status( 200 ).json( {
            message: "Successfully deleted.",
            data: updatedResult
        })
    }
} )

app.listen( PORT, () => {
    console.log( `Server is listening to port ${PORT}` );
})