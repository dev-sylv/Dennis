const express = require( 'express' );
const fs = require( 'fs' );
PORT = 3030


const app = express();
app.use( express.json() ); 

app.get( "/", (req, res) => {
    res.json( {
        message: "Welcome to my api."
    });
} );

function readDatabase () {
    const database = fs.readFileSync( "./user.json" );
    return JSON.parse(database);
}

function writeDatabase (data) {
    fs.writeFileSync( "./user.json", JSON.stringify(data))
}

// Get all the users in the json database
app.get( "/users", (req, res) => {
    const users = readDatabase();
    res.json( {
        data: users,
        size: users.users.length
    });
} );

// Get a particular user
app.get( "/users/:id", ( req, res ) => {
    const database = readDatabase();
    const userId = parseInt(req.params.id);
    const user = database.users.find( ( element ) => ( element.id === userId ) );
    if ( !user ) {
        res.status( 404 ).json( {
            message: "User not found."
        });
    } else {
        res.status( 200 ).json( {
            data: user
        })
    }
} );

// create new user
app.post( "/users", ( req, res ) => {
    const database = readDatabase();
    // const newUser = req.body;
    const { name, age } = req.body;
    newUserId = database.users.length + 1;
    const data = {
        id: newUserId,
        age,
        name
    }
    database.users.push( data );
    // database.users.push( newUser );
    writeDatabase( database );
    res.status( 201 ).json( {
        newData: data
    });
} );

// update users in the json database
app.put( "/users/:id", (req, res) => {
    const database = readDatabase();
    const userId = parseInt( req.params.id );
    const updatedUser = req.body;
    const index = database.users.findIndex( ( i ) => ( i.id === userId ) );
    if ( index !== -1 ) {
        database.users[ index ] = { ...database.users[ index ], ...updatedUser }
        writeDatabase( database )
        res.status( 200 ).json( {
            data: database.users[ index ]
        } );
    } else {
        res.status( 404 ).json( {
            message: "Wrong id."
        })
    }
} );

// delete a user
app.delete( "/users/:id", (req, res) => {
    const database = readDatabase();
    const userId = parseInt( req.params.id )
    const index = database.users.findIndex( ( i ) => ( i.id === userId ) )
    if ( !database.users[0]  ) {
        res.status( 404 ).json( {
            message: `This id: ${userId} does not exit`
        })
    } else {
        deletedUser = database.users[ index ]
        database.users.splice( index, 1 )
        writeDatabase( database );
        res.status( 200 ).json( {
            deletedData: deletedUser
        })
    }
});

app.listen( PORT, () => {
    console.log(`Sever is listening to port: ${PORT}`);
});

