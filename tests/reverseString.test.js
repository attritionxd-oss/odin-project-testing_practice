import reverseString from "/src/reverseString";

describe("reverseString", () => {
  test("happy: module exists", () => {
    expect(reverseString).toBeDefined();
  });

  test("happy: module is a function", () => {
    expect(reverseString.constructor.name).toBe("Function");
  });

  test("happy: returns a string", () => {
    expect(reverseString("string").constructor.name).toBe("String");
  });

  test("happy: returns the reverse of the input", () => {
    expect(reverseString("string")).toBe("gnirts");
    expect(reverseString("hello")).toBe("olleh");
  });

  test("sad: handles an error for unknown argument types", () => {
    const consoleSpy = jest
      .spyOn(console, "error")
      .mockImplementation(() => {});

    const mockValues = [1, true, [], {}];
    mockValues.forEach((value) => {
      expect(reverseString(value)).toBeUndefined();
      expect(consoleSpy).toHaveBeenCalled();
      expect(consoleSpy).toHaveBeenCalledWith(
        "Arg text has incorrect argument",
        typeof value,
      );
    });
  });
});
