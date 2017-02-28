function addPromise (a,b) {
  return new Promise(function (resolve, reject) {
    if (typeof a === 'number' && typeof b === 'number') {
      resolve(a+b);
    } else {
      reject('a and b must be numbers');
    }
  });
}


addPromise(2, 3).then(function (sum) {
  console.log('Success: ', sum);
}, function(err) {
  console.log('Error:', err)
});

addPromise(2, 'sdfsadf;').then(function (sum) {
  console.log('Success: ', sum);
}, function(err) {
  console.log('Error:', err)
});
