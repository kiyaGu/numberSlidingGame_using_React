import { SlidingPuzzle } from "./slidingPuzzle";
describe("slidingPuzzle", () => {
  it("should be a class constructor", () => {
    expect(new SlidingPuzzle()).toBeInstanceOf(SlidingPuzzle);
  });
  it("should have a width and height property", () => {
    expect(new SlidingPuzzle(4, 5)).toHaveProperty("width");
    expect(new SlidingPuzzle(4, 5)).toHaveProperty("height");
  });
  it("should have a tiles property", () => {
    expect(new SlidingPuzzle(3, 3)).toHaveProperty("tiles");
  });
  it("should have a tiles property which is an array", () => {
    expect(new SlidingPuzzle(3, 3).tiles).toEqual([]);
  });
  it("should have a move method", () => {
    const slidingPuzzle = new SlidingPuzzle(3, 3);
    const spyMove = jest.spyOn(slidingPuzzle, "move");
    slidingPuzzle.move();
    expect(spyMove).toHaveBeenCalled();
  });
  it("move command should be called with single argument, position number", () => {
    const slidingPuzzle = new SlidingPuzzle(3, 3);
    const spyMove = jest.spyOn(slidingPuzzle, "move");
    slidingPuzzle.move(5);
    expect(spyMove).toBeCalledWith(5);
  });
  it("should move a tile", () => {
    const slidingPuzzle = new SlidingPuzzle(3, 3);
    slidingPuzzle.tiles = [1, 2, 3, 4, 5, 6, 7, 8, ""];
    const outcome = slidingPuzzle.move(7);
    expect(outcome).toEqual(slidingPuzzle.SUCCESS);
  });
  it("should not make invalid moves", () => {
    const slidingPuzzle = new SlidingPuzzle(3, 3);
    slidingPuzzle.tiles = [1, 2, 3, 4, 5, 6, 7, "", 8];
    const outcome = slidingPuzzle.move(3);
    expect(outcome).toEqual(slidingPuzzle.FAIL);
  });
  it("should not make a move from the edges to the start of the next row", () => {
    const slidingPuzzle = new SlidingPuzzle(3, 3);
    slidingPuzzle.tiles = [1, 2, 3, "", 5, 6, 7, 8, 4];
    slidingPuzzle.move(2);
    expect(slidingPuzzle.tiles).toEqual([1, 2, 3, "", 5, 6, 7, 8, 4]);
  });

  describe("the mixTiles method", () => {
    it("should have mixTiles method", () => {
      const slidingPuzzle = new SlidingPuzzle(3, 3);
      const spyMixTiles = jest.spyOn(slidingPuzzle, "mixTiles");
      slidingPuzzle.mixTiles();
      expect(spyMixTiles).toHaveBeenCalled();
    });
    it("should return an array with the size of width X height", () => {
      const slidingPuzzle = new SlidingPuzzle(3, 3);
      slidingPuzzle.mixTiles();
      expect(slidingPuzzle.tiles.length).toBe(
        slidingPuzzle.width * slidingPuzzle.height
      );
    });
  });
  it("should identify if the puzzle is not solvable", () => {
    const slidingPuzzle = new SlidingPuzzle(3, 3);
    slidingPuzzle.tiles = [4, "", 6, 8, 2, 1, 3, 5, 7];
    expect(slidingPuzzle.isSolvable()).toBeFalsy;
  });
  it("should identify if the puzzle is solvable", () => {
    const slidingPuzzle = new SlidingPuzzle(3, 3);
    slidingPuzzle.tiles = [4, 7, 1, 6, "", 5, 8, 3, 2];
    expect(slidingPuzzle.isSolvable()).toBeTruthy;
  });
  it("should know when the game is solved", () => {
    const slidingPuzzle = new SlidingPuzzle(3, 3);
    slidingPuzzle.tiles = [1, 2, 3, 4, 5, 6, 7, "", 8];
    const outcome = slidingPuzzle.move(8);
    expect(outcome).toBe(slidingPuzzle.WIN);
  });
  it("should reset the puzzle", () => {
    const slidingPuzzle = new SlidingPuzzle(3, 3);
    const tiles = [4, 7, 1, 6, "", 5, 8, 3, 2];
    slidingPuzzle.tiles = tiles;
    slidingPuzzle.reset();
    expect(slidingPuzzle.tiles).not.toEqual(tiles);
  });
});
