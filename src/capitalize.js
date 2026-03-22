export default function capitalize(text) {
  if (text.constructor.name !== "String") {
    console.error("Arg text has incorrect argument", typeof text);
    return;
  }
  return text[0].toUpperCase() + text.slice(1);
}
