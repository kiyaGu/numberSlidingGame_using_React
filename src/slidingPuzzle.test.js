import { SlidingPuzzle } from "./slidingPuzzle";
describe("slidingPuzzle", () => {
  it("should be a class constructor", () => {
    expect(new SlidingPuzzle()).toBeInstanceOf(SlidingPuzzle);
  });
  it("should have a width and height property", () => {
    expect(new SlidingPuzzle(4, 5)).toHaveProperty("width");
    expect(new SlidingPuzzle(4, 5)).toHaveProperty("height");
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
});
