const express = require( 'express' );
const mongoose = require( 'mongoose' );
PORT = 9000;


// created a database url
const databaseUrl = 'mongodb://127.0.0.1/studentDB'
// const databaseUrl = 'mongodb://localhost/studentDB'

// created a database connection
mongoose.connect( databaseUrl ).then( () => {
    console.log(`Successfully connected to the database: ${databaseUrl}`);
} ).catch( ( error ) => {
    console.log(error.message)
} )

// create the application Model
const studentSchema = mongoose.Schema( {
    studentName: {
        type: String,
        required: [true, "Student name is required."]
    },
    studentCourse: {
        type: String,
        required: [true, "Student course is required."]
    },
    courseDuration: {
        type: Number,
        required: [true, "Coursed duration is required."]
    }
} );

// the schema model
const studentModel = mongoose.model('student', studentSchema);

const app = express();
app.use( express.json() );

app.get( "/", ( req, res ) => {
    res.status( 200 ).json( {
        message: "Welcome to my student API."
    })
} )

// create a new student
app.post("/students", async (req, res) => {
    try {
        const student = await studentModel.create( req.body );
        if ( !student ) {
            res.status( 400 ).json( {
                message: "Error creating a student"
            })
        } else {
            res.status( 200 ).json( {
                status: "Success",
                data: student
            });
        }
    } catch ( error ) {
        res.status( 500 ).json( {
            message: error.message
        })
    }
} ) 

// get all students
app.get( "/students", async ( req, res ) => {
    try {
        const students = await studentModel.find();
        if ( students.length < 0 ) {
            res.status( 404 ).json( {
                message: "No student found."
            })
        } else {
            res.status( 201 ).json( {
                status: "Success",
                data: students
            })
        }
    } catch ( error ) {
        console.log(error.message)
    }
} );

// get a student
app.get( "/students/:id", async ( req, res )=>{
    try {
        const studentId = req.params.id;
        const student = await studentModel.findById( studentId );
        if ( !student ) {
            res.status( 404 ).json( {
                message: `Student with id: ${studentId}was not found.`
            })
        } else {
            res.status( 200 ).json( {
                status: 'Success',
                data: student
            })
        }
    } catch ( error ) {
        res.status( 404 ).json( {
            message: error.message
        })
    }
} )

// update a student
app.put( "/students/:id", async ( req, res ) => {
    try {
        const studentId = req.params.id;
        const updatedStudent = await studentModel.findByIdAndUpdate( studentId, req.body, {
            new: true
        } );
        if ( !updatedStudent ) {
            res.status( 400 ).json( {
                message: "Fail to update student."
            })
        } else {
            res.status( 200 ).json( {
                status: "Success",
                data: updatedStudent
            })
        }
    } catch ( error ) {
        res.status( 500 ).json( {
            message: error.message
        })
    }
} );

// delete a student
app.delete("/students/:id", async (req, res) => {
    try {
        const studentId = req.params.id;
        const deletedStudent = await studentModel.findByIdAndDelete( studentId );
        res.status( 200 ).json( {
            message: `User with id: ${ studentId } deleted`,
            deletedStudent
        })
    } catch ( error ) { 
        res.status( 404 ).json( {
            message: error.message
        })
    }
});


app.listen( PORT, () => {
    console.log(`Server is listening to port: ${PORT}`);
})

