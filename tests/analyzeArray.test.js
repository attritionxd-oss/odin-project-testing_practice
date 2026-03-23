import analyzeArray from "/src/analyzeArray";

describe("analyzeArray", () => {
  test("happy: module exists", () => {
    expect(analyzeArray).toBeDefined();
  });

  test("happy: module is a function", () => {
    expect(analyzeArray.constructor.name).toBe("Function");
  });

  test("happy: returns an object", () => {
    expect(analyzeArray([0]).constructor.name).toBe("Object");
  });

  test("happy: module has specific properties", () => {
    const properties = ["average", "min", "max", "length"];
    properties.forEach((property) => {
      expect(analyzeArray([0])[property]).toBeDefined();
    });
  });

  test("happy: check expected values", () => {
    const mockObj = {
      average: 2.5,
      min: 1,
      max: 4,
      length: 4,
    };
    expect(analyzeArray([1, 2, 3, 4])).toMatchObject(mockObj);
  });

  test("sad: error handling for undefined", () => {
    const consoleSpy = jest
      .spyOn(console, "error")
      .mockImplementation(() => {});
    expect(analyzeArray()).toBeUndefined();
    expect(analyzeArray([])).toBeUndefined();
  });

  test("sad: error handling for any non-numeric and NaN", () => {
    const mockValues = [
      ["a", "b", 3],
      [1, 2, "3", 4],
      [1, 2, NaN, 4],
      [1, true, 3, false],
    ];
    mockValues.forEach((vals) => {
      expect(analyzeArray(vals)).toBeUndefined();
    });
  });
});
