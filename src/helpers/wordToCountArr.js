import lowercaseCharToIndex from './lowercaseCharToIndex';

const wordToCountArr = (word) => {
  const arr = new Array(26);

  arr.fill(0);

  for (let i = 0; i < word.length; ++i) {
    const c = word[i];

    arr[lowercaseCharToIndex(c)] += 1;
  }

  return arr;
};

export default wordToCountArr;
