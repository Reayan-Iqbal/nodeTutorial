const {readFileSync, writeFileSync} = require('fs')

const first = readFileSync('./content/first.txt', 'utf-8')// second parameter is the encoding type default is utf-8
const second = readFileSync('./content/second.txt', 'utf-8')// second parameter is the encoding type default is utf-8

console.log(first, second);

/* below code is to write in a file if the file at specified path does not exist node will create the file and write the
given content. else if file is present node can either clear it write the given content to it of append the content */
writeFileSync('./content/third.txt', `Here is the result ${first}, ${second}`)  //clears the existing content in the file
writeFileSync('./content/third.txt', `\nthis text is appended`, {flag: 'a'})  //appends the content in the file
// NOTE: the default value of flag is w ie {flag: 'w'}
