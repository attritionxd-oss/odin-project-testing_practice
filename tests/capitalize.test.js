import capitalize from "/src/capitalize";

describe("capitalize", () => {
  test("happy: module exists", () => {
    expect(capitalize).toBeDefined();
  });

  test("happy: module is a function", () => {
    expect(capitalize.constructor.name).toBe("Function");
  });

  test("happy: returns a string", () => {
    expect(capitalize("string").constructor.name).toBe("String");
  });

  test("happy: capitalizes the first character of the input", () => {
    expect(capitalize("string")).toBe("String");
    expect(capitalize("hello world")).toBe("Hello world");
  });

  test("sad: handles an error for unknown argument types", () => {
    const consoleSpy = jest
      .spyOn(console, "error")
      .mockImplementation(() => {});

    const mockValues = [1, true, [], {}];
    mockValues.forEach((value) => {
      expect(capitalize(value)).toBeUndefined();
      expect(consoleSpy).toHaveBeenCalled();
      expect(consoleSpy).toHaveBeenCalledWith(
        "Arg text has incorrect argument",
        typeof value,
      );
    });
  });
});
