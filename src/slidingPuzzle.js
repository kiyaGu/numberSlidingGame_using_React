export class SlidingPuzzle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
    this.tiles = [];
  }
  move(position) {
    if (this.tiles[position + 1] === "") {
      let temp = this.tiles[position];
      this.tiles[position] = this.tiles[position + 1];
      this.tiles[position + 1] = temp;
    } else if (this.tiles[position - 1] === "") {
      let temp = this.tiles[position];
      this.tiles[position] = this.tiles[position - 1];
      this.tiles[position - 1] = temp;
    }
  }
  mixTiles() {
    let mixedPuzzle = [];
    let size = this.width * this.height;
    //size to make the max random number generated to equal size
    // mixedPuzzle.push(generateRandomNumber(size))
    while (mixedPuzzle.length < size) {
      let number = generateRandomNumber(size);
      //if the number is not already element of mixedPuzzle
      if (!mixedPuzzle.includes(number)) mixedPuzzle.push(number);
    }
    //replace the number 9 with ""(blank)
    if (size === 9) {
      mixedPuzzle[mixedPuzzle.indexOf(9)] = "";
    } else if (size === 16) {
      mixedPuzzle[mixedPuzzle.indexOf(16)] = "";
    }
    this.tiles = mixedPuzzle;
  }
}
function generateRandomNumber(upperBound) {
  return Math.floor(Math.random() * upperBound) + 1;
}
