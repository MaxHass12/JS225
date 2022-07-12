// function makeCounterLogger(defaultNumber) {
//   return function countLog(number) {
//     if (number > defaultNumber) {
//       for(let i = number; i >= defaultNumber; i--) {
//         console.log(i);
//       }
//     } else {
//       for(let i = number; i <= defaultNumber; i++) {
//         console.log(i);
//       }
//     }
//   };
// }

// let countLog = makeCounterLogger(5);

// // countLog(8);
// countLog(2);

function makeList() {
  const items = [];
  return function(item = undefined) {
    if (item) {
      if (items.includes(item)) {
        
      } else {
        items.push(item);
        console.log(`${item} added.`);
      }
    } else {
      if (items.length === 0) {
        console.log('The list is empty.');
      } else {
        items.forEach(item => console.log(item));
      }
    }
  };
}

let list = makeList();

list();
list('make breakfast');
list('read book');
list();