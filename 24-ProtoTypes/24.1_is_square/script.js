
function Square(a, b, c, d){
  this.a = a;
  this.b = b;
  this.c = c;
  this.d = d;
}

Square.prototype.isSquare = function() {
  if(this.a === this.b && this.b === this.c && this.c === this.d && this.d === this.a) {
    return true;
  }
  return false;
};

const square = new Square(2,1,2,2);

console.log(square.isSquare());

