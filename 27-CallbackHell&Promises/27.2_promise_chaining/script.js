
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

    function sortWords() {
      capitals.sort();
      resolved(capitals);
    }

    sortWords();
  });
}

const str = ['hello', 'words', 'world', 'hidden', 'hi'];

const arr = ['hello', 'words', 'world', 'hidden', 'hi', 25];

makeAllCaps(str)
  .then((data) => {
    console.log('your words capitalized and sorted', data);
  })
  .catch(() => {
    console.log('your words include something other than a string', str);
  });

makeAllCaps(arr)
  .then((data) => {
    console.log('your words capitalized and sorted', data);
  })
  .catch(() => {
    console.log('your words include something other than a string', arr);
  });