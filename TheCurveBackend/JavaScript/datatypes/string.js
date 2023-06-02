// strings
//declaring variables
// firstName = "ubani"
// secondName = "friday"
// number1 = "45"
// a = 2
// b = 3
// c = a * b

// string concatenation
// solution1 = firstName + a + b
// lastName = `firstName + secondName + number1`
// console.log( lastName )

// solution2 = `${firstName} ${ a + b }`
// console.log(c)

// - template string
// sampleResult = firstName + secondName + number2
// result2 = `i want ${number2} naira`
// console.log(result2)

// - why is template string preferred over string concatenation? (html template)
// show = `<div>
//     <p>${ b }</p>
// </div>`
// console.log(show)


// assignment solution
// a = 1, b = 2, c = 3, d = 4, e = 5
// f = 6, g = 7, h = 8, i = 9, j = 10
// k = 11, l = 12

// multiply = `<p>
// ${b} * ${a} = ${b *a}
// ${b} * ${b} = ${b *b}
// ${b} * ${c} = ${b *c}
// ${b} * ${d} = ${b *d}
// ${b} * ${e} = ${b *e}
// ${b} * ${f} = ${b *f}
// ${b} * ${g} = ${b *g}
// ${b} * ${h} = ${b *h}
// ${b} * ${i} = ${b *i}
// ${b} * ${j} = ${b *j}
// ${b} * ${k} = ${b *k}
// ${b} * ${l} = ${b *l}
// </p>`
// console.log( multiply )


// comment in javascript
// getting characters
// animal = "God of war"
// animal = "God of war on ground"
// extractedCharacter = animal[ 6 ]
// console.log(extractedCharacter)

// length of string
// sentence = "i am learning javascript"
// result = sentence.length
// console.log(result)

// string method
// - capitalizing string
// result = animal.toUpperCase()
// console.log(result)

// - changing uppercase string to lowercase
// result2 = result.toLowerCase()
// console.log(result2)

// - finding the position of a string character(index)
// result = animal.indexOf("o")
// console.log( result )

// - finding the last character of a string (last)
// result = animal.lastIndexOf("o")
// console.log( result )

// - slicing some characters out of a string
family = "we are one in this family"
family2 = "we are oneinthis family."
result = family.slice( 2, 10 )
console.log( result )

// -splitting in javascript
result2 = family.split( "" )
console.log( result2 )
result3 = family2.split( " " )
console.log( result3 )

// one
splitting = family.split( " " )
result = splitting[ 1 ]
console.log(result)

// - getting a substring from a parent string(substr)
substringStore = family.substr( 4, 7 )
console.log(substringStore)
