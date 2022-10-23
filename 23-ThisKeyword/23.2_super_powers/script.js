
const storm = {
  // add code here
  superPower: 'flying',
  printSuperPower() {
    console.log(this);
    printSuperPower();
  }
};

function printSuperPower() {
  console.log("my superpower is " +
  this.superPower);
}

storm.printSuperPower();