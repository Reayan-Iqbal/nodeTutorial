const path =  require('path')


console.log(path.sep)   // Provides the platform-specific path segment separator (\ for windows)

// join a secquence of path segments using the platform-specific path segment separator and returns a normalized resulting path
// NOTE: all redundant name elements are removed as it retruns a normalized path
const filePath = path.join(__dirname, './///learning_js////','asdf','img','hypotenuse-formula.png')   
console.log(filePath+ ' -> path.join()')

//path.join() simply concatenates segments and its return may or may not result in an absolute path. path.resolve() always returns an absolute path
const absfilePath = path.resolve( './///learning_js////','asdf','img','hypotenuse-formula.png')   
console.log(absfilePath + ' -> path.resolve()')

// find the base name (name of the file/folder in the right end) from a path
const base = path.basename('learning_js\\asdf\\img\\hypotenuse-formula.png')
console.log(base);

// returns the path of directory (whole path without the file/folder in the right end)
const dirname = path.dirname('learning_js\\asdf\\img\\hypotenuse-formula.png')
console.log(dirname);

// returns the extention name (if any)
const extname = path.extname('learning_js\\asdf\\img\\hypotenuse-formula.png')
console.log(extname);

// 