import wordToCountArr from './wordToCountArr';

const wordsToCountsToWordsMap = (words) => {
  const res = {};

  for (let i = 0; i < words.length; ++i) {
    const word = words[i];
    const key = wordToCountArr(word).toString();

    if (!(key in res)) {
      res[key] = [word]; 
    } else {
      res[key].push(word);
    }
  }

  return res;
};

export default wordsToCountsToWordsMap;
