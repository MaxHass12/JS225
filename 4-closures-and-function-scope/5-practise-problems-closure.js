// 1

function makeMultipleLister(number) {
  return function() {
    for(let idx = 1; idx < 100; idx++) {
      if (idx % number === 0) console.log(idx);
    }
  };
}

const lister = makeMultipleLister(13);
lister();