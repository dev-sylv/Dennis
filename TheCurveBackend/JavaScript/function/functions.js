// declarative function
function sumNumbers1 (a, b) {
    console.log(a + b)
}
sumNumbers1();

// function expression
var sumNumbers = function () {
    console.log("function expression")
};
sumNumbers();


// using function arguments and parameters
function sum(a, b) {
    let c = a + b;
    console.log("The sum of the two numbers is: ", c)
}
// call the function
sum( 8, 2 );

function numberRemainder (c, b) {
    console.log("The remainder of the two numbers is: ", c % b)
}
numberRemainder( 10, 4 );

// storing functional values using the "return" keyword
function numberRemainder1 ( c, b ) {
    d = c % b;
    return d;
    console.log("The remainder of the two numbers is: ", d)
}
numberRemainder1(10, 2);

let templateSample = `<b>${ numberRemainder( 10, 4 ) }</b>`
console.log(templateSample)

// arrow function
const speak1 = () => {
    console.log("Good morning")
};
speak1();

// callback function using forEach() as a case study
// array of fruits
const fruits = [ "kiwi", "orange", "mango", "plum", "sherry" ]

for ( i = 0; i < fruits.length; i++ ) {
    console.log( fruits[ i ] );
}

fruits.forEach( (person) => {
    console.log(person);
});
fruits.forEach( function (fruit) {
    console.log(fruit);
});


