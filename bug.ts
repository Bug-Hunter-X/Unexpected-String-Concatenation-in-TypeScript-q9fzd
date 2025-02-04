function add(a: number, b: number): number {
  return a + b;
}

let result = add("hello", 5); // This line will not cause a compile-time error
console.log(result); // This will print "hello5", which might be unexpected