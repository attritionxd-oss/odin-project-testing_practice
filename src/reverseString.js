export default function reverseString(text) {
  if (text.constructor.name !== "String") {
    console.error("Arg text has incorrect argument", typeof text);
    return;
  }
  let arr = text.split("");
  const len = arr.length;
  for (let i = 0; i < len / 2; i++) {
    [arr[i], arr[len - i - 1]] = [arr[len - i - 1], arr[i]];
  }
  return arr.join("");
}
