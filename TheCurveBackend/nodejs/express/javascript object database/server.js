const express = require( 'express' )
const PORT = 7000;

const app = express();
app.use( express.json() )


const fuelStation = [
    {
        id: 1,
        staffName: "ubani",
        staffAddress: "24, road",
        staffSalary: 2000,
        staffPosition: "instructor",
        staffGender: "female"
    },
    {
        id: 2,
        staffName: "ken",
        staffAddress: "24, road",
        staffSalary: 25000,
        staffPosition: "instructor",
        staffGender: "male"
    }
]

app.get( "/", (req, res) => {
    res.status( 200 ).json( {
        message: "Welcome to our fueling station"
    })
} );

app.get( '/staffRecords', (req, res) => {
    res.status( 200 ).json( {
        data: fuelStation
    })
    // res.send(fuelStation)
} );

app.get( '/staffRecords/:id', ( req, res ) => {
    const staffId = parseInt( req.params.id );
    const staff = fuelStation.find( ( item ) => ( item.id === staffId ) );
    if ( !staff ) {
        res.status( 404 ).json( {
            data: "user not found."
        })
    } else {
        res.status( 200 ).json({
            data: staff
        })
    }
} )

app.post( "/staffRecords", (req, res) => {
    // const newStaff = req.body;
    // newStaff.id = fuelStation.length + 1;
    // fuelStation.push( newStaff );
    // res.status( 200 ).json( {
    //     data: newStaff
    // });
    const { staffName, staffAddress, staffSalary, staffPosition, staffGender } = req.body;
    const newStaffId = fuelStation.length + 1;
    const newStaff = {
        id: newStaffId,
        staffName,
        staffAddress,
        staffSalary,
        staffPosition,
        staffGender
    }
    fuelStation.push( newStaff );
    res.status( 200 ).json( {
        data: newStaff
    })
} );

app.patch( "/staffRecords/:id", function ( req, res ) {
    // const staffId = parseInt( req.params.id );
    // const updatedStaff = req.body;
    // const index = fuelStation.findIndex( ( item ) => ( item.id === staffId ) );
    // if ( index !== -1 ) {
    //     fuelStation[ index ] = { ...fuelStation[ index ], ...updatedStaff }
    //     res.status( 200 ).json( {
    //         new: fuelStation[index]
    //     })
    // } else {
    //     res.send("Wrong id sent.")
    // }
    
    const staffId = parseInt( req.params.id );
    const staff = fuelStation.find( ( item ) => ( item.id === staffId ) );

    staff.staffName = req.body.staffName || staff.staffName,
    staff.staffAddress = req.body.staffAddress || staff.staffAddress,
    staff.staffSalary = req.body.staffSalary || staff.staffSalary,
    staff.staffPosition = req.body.staffPosition || staff.staffPosition,
    staff.staffGender = req.body.staffGender || staff.staffGender
    
    res.status( 200 ).json( {
        updatedGuy: staff
    })

});


app.listen( PORT, () => {
    console.log("Sever is listening to port " + PORT)
})



