
function swap(obj) {
  const swappedObj = {};
  for(let key in obj) {
    let val = obj[key];
    swappedObj[obj[key]] = key;
  }
  return swappedObj;
}

const obj = {
  first : 1,
  second : `two`,
  third : [1 , 2]
}

console.log(swap(obj));