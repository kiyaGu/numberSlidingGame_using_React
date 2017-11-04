import { SlidingPuzzle } from "./slidingPuzzle";
describe("slidingPuzzle", () => {
  it("should be a class constructor", () => {
    expect(new SlidingPuzzle()).toBeInstanceOf(SlidingPuzzle);
  });
  it("should have a width and height property", () => {
    expect(new SlidingPuzzle(4, 5).width).toBe(4);
    expect(new SlidingPuzzle(4, 5).height).toBe(5);
  });
});
