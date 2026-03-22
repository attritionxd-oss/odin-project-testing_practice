console.log("null type =", typeof null);
console.log("1 type", typeof 1);
const arr = [1, 2, 1, , 1];
const itemTypes = arr.map((item) => item.constructor.name);
const noNonNumeric = !itemTypes.find((itemType) => itemType !== "Number");
console.log(itemTypes, noNonNumeric);
// console.log(analyzeArray(arr));
