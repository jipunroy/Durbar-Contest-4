function isAnagram(s1, s2) {
  s1 = s1.toLowerCase().replace(/[^a-z]/g, "");
  s2 = s2.toLowerCase().replace(/[^a-z]/g, "");

  if (s1.length !== s2.length) {
    return false;
  }

  const count = {};

  for (let char of s1) {
    count[char] = (count[char] || 0) + 1;
  }

  for (let char of s2) {
    if (!count[char]) {
      return false;
    }

    count[char]--;
  }

  return true;
}