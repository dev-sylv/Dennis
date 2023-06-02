// write a dynamic solution that add two numbers using a function found in a local module
const stolenModule = require( './localModule/localModule' )

// addition
const result = stolenModule.add( 5, 9, 5 );
console.log( result );

// multiplication
let result2 = stolenModule.multiply( 4, 6 );
console.log(result2)