function compressCharacters(str) {
  let result = "";
  let count = 1;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i + 1]) {
      count++;
    } else {
      result += str[i];

      if (count > 1) {
        result += count;
      }

      count = 1;
    }
  }

  return result;
}