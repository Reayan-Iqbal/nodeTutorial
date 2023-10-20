// Modules: every file in node is a module. modules are encapsulated code
// there are 2 ways to do this first is the one below
const {firstName, lastName, sayHi} = require('./3-module'); // NOTE: The names in currly braces have to match the exports
const alternativeSyntax = require('./4-module-alternative-syntax')

sayHi(firstName);
sayHi(lastName);

console.log(alternativeSyntax.itemList)
console.log(alternativeSyntax.newNameForObj)