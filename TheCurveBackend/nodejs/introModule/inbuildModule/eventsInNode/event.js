// events in node is used to handle asynchronous operations provide emiter as well as handle the emitting request.

// import the event module
const EventEmitter = require( 'events' );

const myEmitter = new EventEmitter();

myEmitter.on( "greet", (name) => {
    console.log( `Good morning ${name}` )
} );

myEmitter.emit( "greet", "Mr. Ubani" );

// using an emitter to sum two numbers
myEmitter.on( "sum", (firstNumber, secondNumber) => {
    console.log(`The sum of the two numbers ${firstNumber} and ${secondNumber} is: ${firstNumber + secondNumber}`)
} )

myEmitter.emit( "sum", 5, 9  );