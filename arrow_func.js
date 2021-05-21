// TYLER GETTEL //
// ARROW FUNC EXERCISE //


const array = [1,2,3,5,6,7,8,4,5];
let double = arr => arr.map(val => val*2);

console.log(double(array));


let squareAndFindEvens = numbers => numbers.map(num => num**2).filter(square => square %2===0);

console.log(squareAndFindEvens(array));
