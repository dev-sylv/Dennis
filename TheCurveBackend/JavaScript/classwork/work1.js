// automatically displays greetings based on the user geographical timing

// let name = prompt( "What is your name?" );
// let today = new Date();
// let hour = today.getHours();

// if (hour >= 5 && hour < 12) {
//   console.log("Good morning, " + name + "!");
// } else if (hour >= 12 && hour < 18) {
//   console.log("Good afternoon, " + name + "!");
// } else {
//   console.log("Good evening, " + name + "!");
// }


// greets the user based on the time passed
let time = prompt("Enter a time in 24-hour format (HH:MM):");

// check the digits (00:59) in regular expression
if (time.match(/^([01]\d|2[0-3]):([0-5]\d)$/)) {
    let hour = parseInt( time.split( ":" )[ 0 ] );
    
  if (hour >= 1 && hour < 12) {
      console.log( "Good morning!" );
  } else if (hour >= 12 && hour < 18) {
    console.log("Good afternoon!");
  } else {
    console.log("Good evening!");
  }
} else {
  console.log("Invalid time format.");
}