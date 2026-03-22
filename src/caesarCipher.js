const caesarCipher = (msg, mode = "encode", shift) => {
  if (typeof msg !== "string") {
    console.error("Arg msg has incorrect argument", typeof msg);
    return;
  }

  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const alphaLength = alphabet.length;
  const appliedShift = mode === "decode" ? -shift : shift;

  let translation = "";

  // const msgArr = String(msg).toLowerCase().split("");

  for (let chr of msg) {
    const lowerChr = chr.toLowerCase();
    const currentIndex = alphabet.indexOf(lowerChr);

    /* modulo vs remainer
      the `%` operator is a remainer operator, not a true mathematical modulo
      calculating a negative number using remainder, the result remains negative
      to ensure the index always wraps around into a positive range, use:
      index = ((index + shift) % 26 + 26) % 26
    */
    if (currentIndex !== -1) {
      let newindex =
        (((currentIndex + appliedShift) % alphaLength) + alphaLength) %
        alphaLength;
      let newChar = alphabet[newindex];

      // restore uppercase if original was uppercase
      translation +=
        chr === chr.toUpperCase() ? newChar.toUpperCase() : newChar;
    } else {
      translation += chr;
    }
  }

  return translation;
};

export default caesarCipher;
