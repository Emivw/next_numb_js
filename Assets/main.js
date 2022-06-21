let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 8, 9];
let iterator = numbers.values();
let first = iterator.next().value;
let second = iterator.next().value;
let third = iterator.next().value;
console.log(first);
console.log(second);
console.log(third);