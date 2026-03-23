const calculator = (() => {
  const checkTypeError = (a, b) =>
    (a.constructor.name !== "Number") | (b.constructor.name !== "Number");
  const logTypeError = (a, b) => {
    const errA = a.constructor.name;
    const errB = b.constructor.name;
    console.error("Arg text has incorrect argument", errA, errB);
  };
  const checkUndefinedError = (a, b) => !a | !b;
  const logUndefinedError = (a, b) => {
    const errorMsg = "All arguments must be defined";
    console.error(
      "errorMsg" + !a
        ? "a is undefined"
        : `a is ${a}` + !b
          ? "b is undefined"
          : `b is ${b}`,
    );
  };
  const add = (a, b) => {
    if (checkUndefinedError(a, b)) {
      logUndefinedError(a, b);
      return;
    }
    if (checkTypeError(a, b)) {
      logTypeError(a, b);
      return;
    }
    return a + b;
  };
  const subtract = (a, b) => {
    if (checkUndefinedError(a, b)) {
      logUndefinedError(a, b);
      return;
    }
    if (checkTypeError(a, b)) {
      logTypeError(a, b);
      return;
    }
    return a - b;
  };
  const multiply = (a, b) => {
    if (checkUndefinedError(a, b)) {
      logUndefinedError(a, b);
      return;
    }
    if (checkTypeError(a, b)) {
      logTypeError(a, b);
      return;
    }
    return a * b;
  };
  const divide = (a, b) => {
    if (checkUndefinedError(a, b)) {
      logUndefinedError(a, b);
      return;
    }
    if (checkTypeError(a, b)) {
      logTypeError(a, b);
      return;
    }
    return a / b;
  };

  return { add, subtract, multiply, divide };
})();

export default calculator;
