// JavaScript array
// An array is a collection of similar data elements stored at contiguous memory locations.


// push method
const fruit_5 = [ "mango", "orange", "banana", "apple" ]
result = fruit_5.push( "cucumber" )
console.log( result )
console.log( fruit )

// pop method
fruit_4 = [ "mango", "orange", "banana", "apple" ]
result_4 = fruit_4.pop()
// console.log( fruit )
console.log( "returned result:", fruit )

// template string ${}
a = "john"
b = "peter"
c = a + b
sampleString = 'The sum of a and b is: ${c}'
sampleTemplate = `The sum of a and b is: ${c}`

console.log(sampleString)
console.log(sampleTemplate)

// unshift()
fruit_3 = [ "mango", "orange", "banana", "apple" ]
result = fruit1_3.unshift( "tomato" )
console.log(fruit1_3)

// shift()
fruit = [ "mango", "orange", "banana", "apple" ]
result = fruit.shift()
console.log(fruit)

// map()
fruit9 = [ "mango", "orange", "banana", "apple" ]
let i = fruit19
result = fruit119.map(i => i)
console.log( i )


// create a function that holds "mango"
const mangoFunction = (item) => {
    return item == "apple"
}

// reverse()
const fruit0 = [ "mango", "apple", "orange", "banana", "apple", "orange", "orange" ]
const result = fruit0.reverse()
console.log(result)


// includes()
const fruit1 = [ "mango", "apple", "orange", "banana", "apple", "orange", "orange" ]

const checker1 = fruit1.includes( "mango" )
console.log(checker)


// at()
const fruit2 = [ "mango", "apple", "orange", "banana", "apple", "orange", "orange" ]

const checker2 = fruit2.at( 2 )
console.log(checker)


// slice()
const fruit4 = [ "mango", "apple", "orange", "banana", "apple", "orange", "orange" ]

const checker3 = fruit.slice( 0, 4 )
console.log( checker )

// join()
const fruit3 = [ "mango", "apple", "orange", "banana", "apple", "orange", "orange" ]

const checker4 = fruit3.join( "," )
console.log(checker)

indexOf()
const fruit5 = [ "mango", "apple", "orange", "banana", "apple", "orange", "orange" ]

const checker5 = fruit5.indexOf( "orange" )
console.log( checker )

// find()
const fruit7 = [ "mango", "apple", "orange", "banana", "apple", "orange", "orange" ]

const check = (item) => {
    return item == "orange";
}
const checker7 = fruit7.find( check )
console.log( checker )


// fill()
const fruit8 = [ "mango", "apple", "orange", "banana", "apple", "orange", "orange" ]

const checker8 = fruit8.fill( "mango" )
console.log( checker )

// splice()
const fruit9 = [ "mango", "apple", "orange", "banana", "apple", "orange", "orange" ]

const checker9 = fruit9.splice( 2, 1 )
console.log( checker )

const checker10 = fruit9.splice( 2, 2, "pear", "corn" )
console.log(checker210)

// slice()
const fruit = [ "mango", "apple", "orange", "banana", "apple", "orange", "orange" ]

const checker = fruit.slice( 2, 6 )
console.log( checker )
