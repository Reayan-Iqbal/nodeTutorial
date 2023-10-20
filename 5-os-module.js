const os  = require('os');

// info about current user
const currentUser = os.userInfo()
console.log(currentUser);

// method to return uptime of the system in seconds
console.log(`The System Uptime is ${os.uptime()} seconds`)

// this is pretty self explainatory 
const currentOS = {
    name: os.type(),
    release: os.release(),
    totalmem: os.totalmem(),
    freemem: os.freemem(),
}
console.log(`Current OS details:`);
console.log(currentOS);