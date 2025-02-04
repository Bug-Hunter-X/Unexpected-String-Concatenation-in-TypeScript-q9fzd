function add(a: number, b: number): number {
  return a + b;
}

function isNumber(value: any): value is number {
  return typeof value === 'number';
}

function addSafe(a: any, b: any): number {
  if (isNumber(a) && isNumber(b)) {
    return a + b;
  } else {
    throw new Error("Invalid input: Both parameters must be numbers");
  }
}

let result1 = addSafe(10, 5); // Works as expected
console.log(result1); // Prints 15

//let result2 = addSafe("hello", 5); // Throws an error
//console.log(result2);

let result3 = add(10,5); // Works as expected
console.log(result3); // Prints 15