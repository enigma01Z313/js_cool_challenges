const countLetters = (text, letters = {}) => {
  text
    .split("")
    .forEach(
      (item) => (letters[item] = item in letters ? letters[item] + 1 : 1)
    );

  return letters;
};

module.exports = countLetters;
