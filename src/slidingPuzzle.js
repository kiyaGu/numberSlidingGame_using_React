export class SlidingPuzzle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
    this.tiles = [];
  }
  move(position) {
    /* 
                  a position can move to +1 right,-1 left,-width top, +width bottom
                  if that position is valid and available
        */
    let status;
    if (position % this.width !== 0 && this.tiles[position - 1] === "") {
      this.tiles[position - 1] = this.tiles[position];
      this.tiles[position] = "";
      status = "success";
    } else if (
      (position + 1) % this.width !== 0 &&
      this.tiles[position + 1] === ""
    ) {
      this.tiles[position + 1] = this.tiles[position];
      this.tiles[position] = "";
      status = "success";
    } else if (
      position - this.width >= 0 &&
      this.tiles[position - this.width] === ""
    ) {
      this.tiles[position - this.width] = this.tiles[position];
      this.tiles[position] = "";
      status = "success";
    } else if (
      position + this.width <= this.width * this.height - 1 &&
      this.tiles[position + this.width] == ""
    ) {
      this.tiles[position + this.width] = this.tiles[position];
      this.tiles[position] = "";
      status = "success";
    } else {
      status = "fail";
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
