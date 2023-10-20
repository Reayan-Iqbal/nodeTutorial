// local
const superSecret = 'someSecret'
// share
const firstName = 'Reayan';
const lastName = 'Iqbal';

const sayHi = name =>{
    console.log(`Hello there ${name}`)
}
module.exports = {firstName, lastName, sayHi}  // this way we only export stuff which is needed an not all secret stuff.
