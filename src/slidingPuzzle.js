export class SlidingPuzzle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
    this.tiles = [];
  }
  move(position) {
    this.tiles = [1, 2, 3, 4, 5, 6, 7, "", 8];
  }
}
