import caesarCipher from "/src/caesarCipher";

describe("caesarCipher", () => {
  test("happy: module exists", () => {
    expect(caesarCipher).toBeDefined();
  });

  test("happy: module is a function", () => {
    expect(caesarCipher.constructor.name).toBe("Function");
  });

  test("happy: returns a string", () => {
    expect(typeof caesarCipher("")).toBe("string");
  });

  test("happy: returns encoded string (1)", () => {
    expect(caesarCipher("a", "encode", 2)).toBe("c");
  });

  test("happy: returns encoded string (2)", () => {
    expect(caesarCipher("hello", "encode", 9)).toBe("qnuux");
  });

  test("happy: returns encoded string (3)", () => {
    expect(caesarCipher("Hello World!", "encode", 9)).toBe("Qnuux Fxaum!");
  });

  test("happy: returns encoded string (4)", () => {
    expect(caesarCipher("Qnuux Fxaum!", "decode", 9)).toBe("Hello World!");
  });

  test("happy: returns encoded string (5)", () => {
    expect(caesarCipher("xyz!", "encode", 3)).toBe("abc!");
  });

  test("happy: returns encoded string (6)", () => {
    expect(caesarCipher("HeLLo", "encode", 3)).toBe("KhOOr");
  });

  test("happy: returns encoded string (7)", () => {
    expect(caesarCipher("Hello, World!", "encode", 3)).toBe("Khoor, Zruog!");
  });

  test("sad: handles an error for unknown argument types", () => {
    const consoleSpy = jest
      .spyOn(console, "error")
      .mockImplementation(() => {});

    const mockValues = [1, true, [], {}];
    mockValues.forEach((value) => {
      expect(caesarCipher(value)).toBeUndefined();
      expect(consoleSpy).toHaveBeenCalled();
      expect(consoleSpy).toHaveBeenCalledWith(
        "Arg msg has incorrect argument",
        typeof value,
      );
    });
  });
});
