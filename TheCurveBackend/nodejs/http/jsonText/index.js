// import the http
const http = require( 'http' );
port = 2000;

// sample JSON data
const market = [
    {
        id: 1,
        name: "boundary",
        location: "AJIF",
        size: "Large",
        type: "food stuff"
    },
   
    {
        id: 2,
        name: "boundary",
        location: "AJIF",
        size: "Large",
        type: "food stuff"
    },
   
    {
        id: 3,
        name: "boundary",
        location: "AJIF",
        size: "Large",
        type: "food stuff"
    },
   
    {
        id: 4,
        name: "boundary",
        location: "AJIF",
        size: "Large",
        type: "food stuff"
    },
    {
        id: 5,
        name: "boundary",
        location: "AJIF",
        size: "Large",
        type: "food stuff"
    },
   
]

const app = http.createServer( (req, res) => {
    res.writeHead( 200, { "Content-Type": "application/json" } )
    res.end(`All the available markets in lagos: \n ${JSON.stringify(market)}\n The total market in lagos is: ${market.length}`)
});

app.listen( port, () => {
    console.log("Listening on port: " + port)
})