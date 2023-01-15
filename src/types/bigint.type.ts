let bigInt1 = BigInt(1945845);

let bigInt2 = 287n;
console.log(bigInt1);

const safeInteger = Number.MAX_SAFE_INTEGER;
console.log(safeInteger);

const safeIntPlusOne = safeInteger + 1;
console.log(safeIntPlusOne);

const safeIntPlusTwo = safeInteger + 2;
console.log(safeIntPlusTwo);

let a: bigint = BigInt(1234568);

// literal syntax
let b: bigint = 859654n;

let c: bigint = a - b;

// bigint cannot contain decimal points
let d: bigint = 123.456n; // Error

// Math method cannot be used with bigint
let f = Math.log(a) // Error