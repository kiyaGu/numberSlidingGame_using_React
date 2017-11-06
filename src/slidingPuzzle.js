class SlidingPuzzle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
    this.tiles = [];
    this.SUCCESS = "success";
    this.FAIL = "fail";
    this.WIN = "win";
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
      this.tiles[position + this.width] === ""
    ) {
      this.tiles[position + this.width] = this.tiles[position];
      this.tiles[position] = "";
      status = "success";
    } else {
      status = "fail";
    }
    if (this.gameComplete()) {
      return "win";
    } else {
      return status;
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
  isSolvable() {
    let numberOfInversion = calculateNumberOfInversion(this.tiles);
    let gridWidth = this.width;
    let indexOfBlank = this.tiles.indexOf("");

    if (gridWidth % 2 !== 0 && numberOfInversion % 2 === 0) {
      return true;
    } else if (gridWidth % 2 === 0) {
      if (
        ((indexOfBlank >= 0 && indexOfBlank <= 3) ||
          (indexOfBlank >= 8 && indexOfBlank <= 11)) &&
        numberOfInversion % 2 !== 0
      ) {
        return true;
      } else if (
        ((indexOfBlank >= 4 && indexOfBlank <= 7) ||
          (indexOfBlank >= 12 && indexOfBlank <= 15)) &&
        numberOfInversion % 2 === 0
      ) {
        return true;
      }
    } else {
      return false;
    }
  }
  gameComplete() {
    let winState = [];
    for (let i = 1; i < this.width * this.height; i++) {
      winState.push(i);
    }
    winState.push("");
    if (this.tiles.length !== winState.length) {
      return false;
    }
    for (let j = 0; j < winState.length; j++) {
      if (winState[j] !== this.tiles[j]) {
        return false;
      }
    }
    return true;
  }
  reset() {
    this.mixTiles();
    while (!this.isSolvable()) {
      this.mixTiles();
    }
  }
}

//for mixing the puzzle
function generateRandomNumber(upperBound) {
  return Math.floor(Math.random() * upperBound) + 1;
}
//for checking the solvablity of the puzzle
function calculateNumberOfInversion(tiles) {
  let numberOfInversion = 0;
  tiles.forEach(tile => {
    let count = 0;
    for (let i = tiles.indexOf(tile) + 1; i < tiles.length; i++) {
      if (tiles[i] === "") {
        continue;
      }
      if (tile > tiles[i]) ++count;
    }
    numberOfInversion += count;
  });

  return numberOfInversion;
}

export { SlidingPuzzle };
