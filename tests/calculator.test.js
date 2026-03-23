import calculator from "/src/calculator";

describe("calculator", () => {
  test("happy: module exists", () => {
    expect(calculator).toBeDefined();
  });

  test("happy: module is an Object", () => {
    expect(calculator.constructor.name).toBe("Object");
  });

  test("happy: module has specific methods", () => {
    const methods = ["add", "subtract", "multiply", "divide"];
    methods.forEach((method) => expect(calculator[method]).toBeDefined());
  });

  test("happy: operations with correct expected values", () => {
    const ops = [
      { op: "add", a: 64, b: 4, res: 68 },
      { op: "subtract", a: 64, b: 4, res: 60 },
      { op: "multiply", a: 64, b: 4, res: 256 },
      { op: "divide", a: 64, b: 4, res: 16 },
    ];
    ops.forEach((val) => {
      expect(calculator[val.op](val.a, val.b)).toBe(val.res);
    });
  });

  test("sad: error handling for undefined", () => {
    const consoleSpy = jest
      .spyOn(console, "error")
      .mockImplementation(() => {});
    const errorMsg = "Arg text has incorrect argument";
    expect(calculator["add"]()).toBeUndefined();
  });

  test("sad: error handling for non-numeric types", () => {
    const consoleSpy = jest
      .spyOn(console, "error")
      .mockImplementation(() => {});
    const errorMsg = "Arg text has incorrect argument";
    const dtypes = [[], true, {}, "a"];
    const methods = ["add", "subtract", "multiply", "divide"];
    dtypes.forEach((ty, idx) => {
      methods.forEach((met) => {
        expect(calculator[met](ty, ty)).toBeUndefined();
        expect(consoleSpy).toHaveBeenCalled();
        expect(consoleSpy).toHaveBeenCalledWith(
          errorMsg,
          dtypes[idx].constructor.name,
          dtypes[idx].constructor.name,
        );
      });
    });
  });

  test("sad: error handling for empty strings", () => {
    expect(calculator.add("", "")).toBeUndefined();
  });
});
