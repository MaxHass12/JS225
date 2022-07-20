function countdown(count) {
  (function logNumbers(n) {
    for(let i = n; i >= 0; i--) {
      console.log(i);
    }
    console.log('Done');
  })(count);
}

countdown(8);