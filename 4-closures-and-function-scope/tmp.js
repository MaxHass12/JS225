function timed(func) {
  return function() {
    let start = new Date();
    func();
    let stop = new Date();
    console.log((stop - start).toString() + ' ms have elapsed');
  };
}

function loopy() {
  let sum = 0;
  let i;

  for(i = 1; i < 1000000000; i += 1) {
    sum += 1;
  }

  console.log(sum);
}

// let timedHi =  timed(function() {
//   console.log('hi');
// });

// timedHi();

timed(loopy)();
