import wordsToCountsToWordsMap from './wordsToCountsToWordsMap';
import wordToCountArr from './wordToCountArr';

describe('wordsToCountsToWordsMap', () => {
  it('should return an object with no keys when passing an empty array', () => {
    expect(Object.keys(wordsToCountsToWordsMap([])).length).toBe(0);
  });

  it('should return an object with a key of the counts of "a" when passing an array with word "a"', () => {
    const res = wordsToCountsToWordsMap(["a"]);

    expect(Object.keys(res).length).toBe(1);
    expect(wordToCountArr("a").toString() in res).toBe(true);
  });

  it('should return an object with a key of the counts of "apple" mapped to an array containing the word "apple" when passing an array with word "apple"', () => {
    const res = wordsToCountsToWordsMap(["apple"]);

    expect(Object.keys(res).length).toBe(1);
    expect(wordToCountArr("apple").toString() in res).toBe(true);
    expect(res[wordToCountArr("apple").toString()][0]).toBe("apple");
  });

  it('should return an object with two keys of the counts of "a" and "aa" mapped to arrays containing the word "a" and "aa" when passing an array with the words "a" and "aa"', () => {
    const res = wordsToCountsToWordsMap(["a", "aa"]);

    expect(Object.keys(res).length).toBe(2);
    expect(wordToCountArr("a").toString() in res).toBe(true);
    expect(wordToCountArr("aa").toString() in res).toBe(true);
    expect(res[wordToCountArr("a").toString()][0]).toBe("a");
    expect(res[wordToCountArr("aa").toString()][0]).toBe("aa");
  });

  it('should return an object with one key of the counts of "car" mapped to an array containing the words "car" and "arc" when passing an array with the words "car" and "arc"', () => {
    const res = wordsToCountsToWordsMap(["car", "arc"]);

    expect(Object.keys(res).length).toBe(1);
    expect(wordToCountArr("car").toString() in res).toBe(true);
    expect(wordToCountArr("arc").toString() in res).toBe(true);
    expect(res[wordToCountArr("car").toString()][0]).toBe("car");
    expect(res[wordToCountArr("arc").toString()][1]).toBe("arc");
  });
});
