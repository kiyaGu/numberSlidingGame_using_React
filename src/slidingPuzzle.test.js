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
    slidingPuzzle.move(7);
    expect(slidingPuzzle.tiles).toEqual([1, 2, 3, 4, 5, 6, 7, "", 8]);
  });
});
