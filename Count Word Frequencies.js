function countWordFrequencies(sentence) {
  const words = sentence.toLowerCase().match(/[a-z0-9]+/g) || [];
  const result = {};

  for (const word of words) {
    result[word] = (result[word] || 0) + 1;
  }

  return result;
}