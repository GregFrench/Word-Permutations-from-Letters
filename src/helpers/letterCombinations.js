let res = [];

const letterCombinationsHelper = (word, index, curr) => {
  if (index >= word.length) {
    res.push(curr);
    return;
  }

  letterCombinationsHelper(word, index+1, curr + word[index]);

  const c = word[index];

  while (index < word.length && word[index] === c) {
    ++index;
  }

  letterCombinationsHelper(word, index, curr);
};

const letterCominbations = (word) => {
  let inputWord = word;
  res = [];

  // Sort the input word
  inputWord = inputWord.split('').sort().join('');

  letterCombinationsHelper(inputWord, 0, "");

  return res;
};

export default letterCominbations;
