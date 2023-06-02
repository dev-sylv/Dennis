// else if statement
// people = ["ada", "grace", "john", "mike"]
// let check = people.includes("mike")
// if ( check ) {
//     console.log("Found")
// } else {
//     console.log("Not Found")
// }

let totalResult = 70;
if ( totalResult >= 70 ) {
    console.log("A: Excellent")
} else if ( totalResult > 50 && totalResult < 70 ) {
    console.log("B: Very good")
}else if(totalResult > 40 && totalResult <= 50){
    console.log("C: Good")
} else if (totalResult > 30 && totalResult <= 40) {
    console.log("D: fair")
} else if (totalResult > 20 && totalResult <= 30) {
    console.log("E: poor")
} else {
    console.log("F: FAILED")
}