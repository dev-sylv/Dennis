// import the os module
const os = require( 'os' );


const freeMemory = os.freemem();
console.log( `Free memory: ${freeMemory}` )

const totalMemory = os.totalmem();
console.log( `Total memory: ${totalMemory}` )

const usedMemory = totalMemory - freeMemory;
console.log(`The used memory in my system is: ${usedMemory}` );