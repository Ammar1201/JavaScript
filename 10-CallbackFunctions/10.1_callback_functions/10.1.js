

// 1.----------------------------------------------------------------------

function isString(str, func) {
  if(typeof str === 'string') {
    func(str);
  }
  else {
    console.log(`Not a String`);
  }
}

function print(str) {
  console.log(str);
}

isString(`Hello`, print);

// 2.----------------------------------------------------------------------

function firstWordUpperCase(str, func) {
  const words = str.split(' ');
  words[0] = words[0].toUpperCase();
  let tmp = words.join(' ');
  func(tmp);
}

function dashes(str) {
  const words = str.split(' ');
  const tmp = words.join('-');
  console.log(tmp);
} 

firstWordUpperCase(`hello how are`, dashes);

// 3.----------------------------------------------------------------------

function dashesWithUpperCase(str) {
  const words = str.split(' ');
  for(let i = 0; i < words.length; i++) {
    words[i] = words[i].toUpperCase();
  }
  const tmp = words.join('-');
  console.log(tmp);
}

firstWordUpperCase(`hello how are`, dashesWithUpperCase);

// 4.----------------------------------------------------------------------

function stringThings(str, func) {
  func(str);
}

function capitlizeEeryFirstLetter(str) {
  const words = str.split(" ");
  for (let i = 0; i < words.length; i++) {
    words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
  }
  const tmp = words.join(" ");
  console.log(tmp);
}

stringThings(`hello how are`, capitlizeEeryFirstLetter);

