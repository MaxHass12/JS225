let foo = {};
let bar = Object.create(foo);

console.log(Object.getOwnPropertyNames(foo));
bar.a = 1;
console.log(Object.getOwnPropertyNames(foo));