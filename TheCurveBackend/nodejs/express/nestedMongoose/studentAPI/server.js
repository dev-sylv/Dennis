const express = require( 'express' )
const mongoose = require( 'mongoose')
PORT = 4000;

const connectionString = 'mongodb://localhost/curveDB'
mongoose.connect( connectionString ).then( () => {
    console.log(`connected to ${connectionString} successfully.`)
}).catch( ( error ) => {
    console.log(error.message)
} )


const curveSchema = mongoose.Schema( {
    name: {
        type: String,
        required: [true, "Name is required."]
    },
    course: {
        type: String,
        required: [true, "Course is required."]
    },
    designation: {
        type: String,
        required: [true, "Designation is required."]
    },
    score: {
        html: {
            type: Number,
        },
        css: {
            type: Number,
        },
        javascript: {
            type: Number,
        },
        node: {
            type: Number,
        },
        
    }
});
const curveModel = mongoose.model( 'curve', curveSchema );

const app = express();
app.use( express() );
app.use( express.json() );

app.post( "/curves", async (req, res) => {
    try {
        const curve = await curveModel.create( req.body );
        if ( !curve ) {
            res.status( 400 ).json( {
                Error: 'Error creating curve.'
            })
        } else {
            res.status(201).json(curve)
        }
    } catch ( e ) {
        res.status( 400 ).json( {
            Message: e.message
        })
    }
})

app.get( '/curves', async ( req, res ) => {
    try {
        const curves = await curveModel.find();
        if ( curves.length === 0 ) {
            res.status( 400 ).json( {
                Error: 'This collection has no data.'
            })
        } else {
            res.status(201).json(curves)
        }
    } catch ( e ) {
        res.status( 400 ).json( {
            Message: e.message
        })
    }
})

app.get( '/curves/:curveId', async ( req, res ) => {
    try {
        const curveId = req.params.curveId;
        const curve = await curveModel.findById(curveId);
        if ( !curve ) {
            res.status( 400 ).json( {
                Error: `No curve with this id: ${curveId}`
            })
        } else {
            res.status(201).json(curve)
        }
    } catch ( e ) {
        res.status( 400 ).json( {
            Message: e.message
        })
    }
} )

app.put( "/curves/:curveId", async ( req, res ) => {
    try {
        const curveId = req.params.curveId;
        const curve = await curveModel.findById( curveId );
        
        const bodyData = {
        name: req.body.name || curve.name,
        course: req.body.course || curve.course,
        designation: req.body.designation || curve.designation,
        score: {
            html: req.body.score.html || curve.score.html,
            css: req.body.score.css || curve.score.css,
            javascript: req.body.score.javascript || curve.score.javascript,
            node: req.body.score.node || curve.score.node
            }
        }

        await curveModel.updateOne( bodyData );
        if ( bodyData ) {
            res.status(200).json(bodyData);
        } else {
            res.status( 400 ).json( {
                Error: 'Error updating curve.'
            })
        }
    } catch ( e ) {
        res.status( 400 ).json( {
            Message: e.message
        })
    }
} )

app.delete( '/curves/:curveId', async function ( req, res ) {
    try {
        const curveId = req.params.curveId;
        const curve = await curveModel.findById( curveId );
        if ( curve ) {
            const deletedCurve = await curveModel.findByIdAndDelete( curveId );
            res.status( 200 ).json( {
                Message: `Curve with this id: ${ curveId } is deleted.`,
                deleted: deletedCurve
            })
        } else {
            res.status( 400 ).json( {
                Error: "Error deleting curve."
            })
        }
        
    } catch ( e ) {
        res.status( 400 ).json( {
            Message: e.message
        })
    }
})

app.listen(PORT, ()=>{
    console.log(`Server is listening to port ${PORT}`)
})