
function greaterThan10(value) {
  return new Promise((resolved, rejected) => {
    if(value > 10) {
      resolved();
    }
    else {
      rejected();
    }
  });
}

greaterThan10(5)
  .then(() => {
    console.log('greater Than 10');
  })
  .catch(() => {
    console.log('smaller Than 10');
  });