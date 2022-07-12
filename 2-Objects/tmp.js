const array = [{a: 1}, {a: 2}, {a: 3}];

const obj = {a: 5};
console.log(array.findIndex(elem => elem.a === obj.a));