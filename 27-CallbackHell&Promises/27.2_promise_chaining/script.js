
function makeAllCaps(words) {
  return new Promise((resolved, rejected) => {
    const capitals = words.map(word => {
      if(typeof word === 'string') {
        return word.toUpperCase();
      }
      else {
        rejected();
      }
    });

    resolved(capitals);
  });
}
  
function sortWords(words) {
  return new Promise((resolved, rejected) => {
    words.forEach(word => {
      if(typeof word !== 'string') {
        rejected();
      }
    });
    resolved(words.sort());
  });
}
  
const str = ['hello', 'words', 'world', 'hidden', 'hi'];

const arr = ['hello', 'words', 'world', 'hidden', 'hi', 50];

makeAllCaps(str)
  .then((capitalized) => {
    console.log('string');
    return sortWords(capitalized)
  })
  .then((sorted) => {
    console.log('your words capitalized and sorted', sorted);
  })
  .catch(() => {
    console.log('your words include something other than a string', str);
  });

makeAllCaps(arr)
  .then((capitalized) => {
    return sortWords(capitalized)
  })
  .then((sorted) => {
    console.log('your words capitalized and sorted', sorted);
  })
  .catch(() => {
    console.log('your words include something other than a string', arr);
  });