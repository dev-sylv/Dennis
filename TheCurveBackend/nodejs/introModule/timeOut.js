// set interval
let myInterval = setInterval( () => {
    console.log("i will show up every two(2) seconds")
}, 2000 );

// set timeout
setTimeout( () => {
    clearInterval(myInterval);
    console.log("You time is up.")
}, 10000 )

